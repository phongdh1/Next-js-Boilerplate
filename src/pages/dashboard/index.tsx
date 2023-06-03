/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { SideMenuInfo } from '@/components/side-menu-info/side-menu-info';
import SlideMenu from '@/components/slide/SlideMenu';
import { HEADER_DATA } from '@/constants/user-menu.constant';

import styles from './dashboard.module.scss';
import Header from './Header';

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
                    width={265}
                    height={265}
                    src={item.imageSrc}
                    alt="Description"
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
  const [menuItems, setMenuItems] = useState<any[] | null>([]);

  useEffect(() => {
    setMenuItems(HEADER_DATA({ router }));
  }, []);
  return (
    <div className={`container-fluid ${styles['dashboard-container']}`}>
      <Header listMenu={menuItems} />
      <div className="row">
        <div className="col-9">
          <MainBoard></MainBoard>
        </div>
        <div className="col-3">
          <SideMenuInfo menuItems={menuItems}></SideMenuInfo>
        </div>
      </div>
      <SlideMenu data={['slide 1', 'slide 2', 'slide3', 'slide 4']} />
    </div>
  );
};

export default Dashboard;
