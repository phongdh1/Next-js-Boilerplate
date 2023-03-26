import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import { HolaSelect } from '@/components/hola-select/hola-select';
import { SideMenuInfo } from '@/components/side-menu-info/side-menu-info';
import type { HolaOptionsList } from '@/models/hola-option.model';
import api from '@/utils/service/api';

const Index = () => {
  const dropdownSourceDemo = [
    {
      text: '1',
      value: 1,
    },
    {
      text: '2',
      value: 2,
    },
  ];

  const [loading, setLoading] = useState(false);
  const change = (value: any) => {
    console.log(value);
    return value;
  };
  const [dropdownSource, setDropdownSource] = useState<HolaOptionsList>(null);
  useEffect(() => {
    setDropdownSource(dropdownSourceDemo);
    setLoading(true);
    api
      .get(
        'courses/1dae7e53-4229-46bb-ab92-749033f4f83b/units?isRoot=true&pageSize=1000'
      )
      .then((value) => {
        if (value?.data?.data?.length) {
          console.log(value?.data?.data?.length);
          setDropdownSource(
            value.data.data.map((el: any) => ({
              value: el?.id || '',
              text: el?.name || '',
            }))
          );
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 mt-4">
          <h2>Các bài luyện tập</h2>
        </div>
        <div className="col-4 mt-4">
          {!loading ? (
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
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          {loading && <Spinner variant="light" />}
        </div>
      </div>
    </div>
  );
};

export default Index;
