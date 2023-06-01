/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import loadinglogin from '../../../public/assets/images/loadinglogin.png';
import styles from './loading.module.scss';

const LoadingLogin = ({ time }: any) => {
  const [style, setStyle] = useState<any>(0);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(increment, time / 100);
    function increment() {
      i += 1;

      if (i === 100) {
        clearInterval(interval);
      }
      setStyle(i);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <Image src={loadinglogin} alt="login" />;
        </div>
        <div className={styles.progress}>
          <div
            className={styles['progress-done']}
            style={{ width: `${style}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingLogin;
