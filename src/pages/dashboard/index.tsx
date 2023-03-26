import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { SideMenuInfo } from '@/components/side-menu-info/side-menu-info';
import { USER_MENU_LIST } from '@/constants/user-menu.constant';
import type { SideMenuItem } from '@/models/side-menu-item.model';

import styles from './dashboard.module.scss';

const MainBoard = () => {
  const listMenu = [
    {
      key: 1,
      imageSrc: '/assets/images/hoc.png',
      title: 'Học',
      navigateTo: '/hoc',
    },
    {
      key: 2,
      imageSrc: '/assets/images/luyentap.png',
      title: 'Luyện tập',
      navigateTo: '/luyen-tap',
    },
    {
      key: 3,
      imageSrc: '/assets/images/luyenthi.png',
      title: 'Luyện thi Cambridge',
      navigateTo: '/luyen-thi-cambrige',
    },
    {
      key: 4,
      imageSrc: '/assets/images/thi-thu.png',
      title: 'Thi thử',
      navigateTo: '/thi-thu',
    },
  ];

  return (
    <div className="row">
      <h1 className="col-12 mb-3">Báo cáo</h1>
      <div className="col-12">
        <div className="row justify-content-center align-items-center">
          {listMenu.map((item) => (
            <div
              key={item.key}
              className={`d-flex flex-column justify-content-center align-items-center ${styles['dashboard-item']}`}
            >
              <Link href={item.navigateTo}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Image
                    width="265px"
                    height="265px"
                    src={item.imageSrc}
                  ></Image>
                  <span className="mt-2 text-white">{item.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<SideMenuItem[] | null>(null);

  useEffect(() => {
    setMenuItems(USER_MENU_LIST({ router }));
  }, []);
  return (
    <div className={`container-fluid ${styles['dashboard-container']}`}>
      <div className="row">
        <div className="col-9">
          <MainBoard></MainBoard>
        </div>
        <div className="col-3">
          <SideMenuInfo menuItems={menuItems}></SideMenuInfo>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
