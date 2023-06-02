// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './slide.module.scss';

const SlideMenu = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        {data &&
          data.map((item: any) => <SwiperSlide key={item}>{item}</SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default SlideMenu;
