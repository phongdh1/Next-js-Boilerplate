/* eslint-disable tailwindcss/no-custom-classname */
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import bg from '../../../public/assets/images/header/btn.png';
import btnLeft from '../../../public/assets/images/header/btnleft.png';
import iconLeft from '../../../public/assets/images/header/lefticon.png';
import styles from './dashboard.module.scss';

const Header = ({ listMenu }: any) => {
  const router = useRouter();
  useEffect(() => {
    const name = Cookies.get('username') || '';
    if (!name || !Cookies.get('token')) {
      router.push('/login');
    }
  }, [listMenu]);
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${styles.header}`}
    >
      <div className={`position-relative ${styles.left}`}>
        <button
          type="button"
          className="btn btn-link position-relative d-flex align-items-center m-0 p-0"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <Image
            itemType="button"
            src={btnLeft}
            className={styles.login_btn}
            alt="Score"
          />
          <div
            className="position-absolute d-flex justify-content-center align-items-center inset-y-0"
            style={{ right: '3rem' }}
          >
            <div
              className="d-flex justify-content-center align-items-center h3 m-0"
              style={{ color: '#3F64C5', fontSize: '52px' }}
            >
              800
            </div>
          </div>
          <div className="position-absolute d-flex justify-content-between align-items-center inset-y-0 left-0">
            <Image src={iconLeft} className={styles.login_btn} alt="Score" />
          </div>
        </button>
      </div>
      <div className="d-flex justify-content-end align-items-center gap-4">
        {listMenu &&
          listMenu.map((item: any) => {
            return (
              <button
                type="button"
                key={item.index}
                className="btn btn-link position-relative d-flex align-items-center m-0 p-0"
              >
                <Image itemType="button" src={bg} alt="background" />
                <div
                  className="d-flex justify-content-center align-items-center position-absolute rounded-circle inset-x-0 m-auto bg-white"
                  style={{ width: '75%', height: '75%' }}
                >
                  <Image
                    width={50}
                    height={50}
                    itemType="button"
                    src={item.imageSrc}
                    alt={item.title}
                  />
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
