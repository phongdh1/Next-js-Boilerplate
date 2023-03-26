import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import type { SideMenuItem } from '@/models/side-menu-item.model';

import styles from './side-menu-info.module.scss';

export const SideMenuInfo = (props: { menuItems: SideMenuItem[] | null }) => {
  const { menuItems } = props;
  const router = useRouter();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const name = Cookies.get('username') || '';
    if (!name || !Cookies.get('token')) {
      router.push('/login');
    }
    setUserName(name);
  }, [menuItems]);

  return (
    <div className={styles['side-menu-info-container']}>
      <div className="row align-items-center py-2">
        <div className="col-3 d-flex align-items-center justify-content-end">
          <Image
            width="116px"
            height="96px"
            src={'/assets/images/khung ava.png'}
          ></Image>
        </div>
        <div className="col-9 d-flex  align-items-center text-white">
          Xin chào: {userName}
        </div>
      </div>
      {menuItems &&
        menuItems.map((item: any) => (
          <div
            key={item.idx}
            onClick={item.onClick}
            className={`row align-items-center py-2 ${styles['infor-item']}`}
          >
            <div className="col-3 d-flex align-items-center justify-content-end">
              <Image width="63px" height="52px" src={item.imageSrc}></Image>
            </div>
            <div className="col-9 d-flex  align-items-center text-white">
              {item.title}
            </div>
          </div>
        ))}
    </div>
  );
};
