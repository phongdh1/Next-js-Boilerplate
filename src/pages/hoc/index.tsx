import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import { HolaSelect } from '@/components/hola-select/hola-select';
import { SideMenuInfo } from '@/components/side-menu-info/side-menu-info';
import type { HolaOptionsList } from '@/models/hola-option.model';
import api from '@/utils/service/api';

import styles from './hoc.module.scss';

const courseId = '1dae7e53-4229-46bb-ab92-749033f4f82a';

const Index = () => {
  const [dropdownLoading, setDropdownLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [listUnit, setUnitList] = useState<any[]>([]);

  const getListUnitByCoursesId = (subCourseId: string) => {
    setListLoading(true);

    api
      .get(`courses/${courseId}/units/${subCourseId}`)
      .then((response: any) => {
        setUnitList(
          response?.data?.children
            ?.filter((el: any) => el.status === 'Public')
            .map((el: any) => ({ ...el })) || []
        );
      })
      .catch(() => {
        setUnitList([]);
      })
      .finally(() => {
        setListLoading(false);
      });
  };

  const change = (value: string) => {
    getListUnitByCoursesId(value);
    return value;
  };

  const [dropdownSource, setDropdownSource] = useState<HolaOptionsList>(null);

  useEffect(() => {
    setDropdownSource([]);
    setDropdownLoading(true);
    api
      .get(`courses/${courseId}/units?isRoot=true&pageSize=1000`)
      .then((value) => {
        const newDataSource =
          value?.data?.data
            ?.filter((el: any) => el.status === 'Public')
            ?.map((el: any) => ({
              value: el?.id || '',
              text: el?.name || '',
            })) || [];
        if (value?.data?.data?.length) {
          setDropdownSource(newDataSource);
        }
        return newDataSource;
      })
      .then((value) => {
        if (value && value[0]?.value) getListUnitByCoursesId(value[0].value);
      })
      .catch(() => {})
      .finally(() => {
        setDropdownLoading(false);
      });
  }, []);

  return (
    <div className={`container-fluid ${styles['hoc-page-container']}`}>
      <header>
        <div className="row">
          <div className="col-5 mt-4">
            <h2>Các bài luyện tập</h2>
          </div>
          <div className="col-4 mt-4">
            {!dropdownLoading ? (
              <HolaSelect
                onChange={change}
                dataSource={dropdownSource}
              ></HolaSelect>
            ) : (
              <Spinner animation="grow" variant="light" />
            )}
          </div>
          <div className="col-3">
            <SideMenuInfo menuItems={null}></SideMenuInfo>
          </div>
        </div>
      </header>

      <section>
        {listLoading && (
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Spinner variant="light" />
            </div>
          </div>
        )}
        {/* list item */}
        {!listLoading && listUnit && (
          <div className="d-flex justify-content-center show-up-anima flex-row flex-wrap">
            {listUnit?.map((el) => (
              <div key={el?.id} className={`${styles.card}`}>
                <Link
                  href={`/hoc/bat-dau-bai-hoc/${el?.excercise?.id}/${el?.name}/${el?.excercise?.numberOfQuestions}/${el?.excercise?.time}`}
                >
                  <a>
                    <h3>{el?.name}</h3>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
      <footer></footer>
    </div>
  );
};

export default Index;
