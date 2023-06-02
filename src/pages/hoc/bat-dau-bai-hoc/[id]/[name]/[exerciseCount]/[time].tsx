/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import batDauPng from '../../../../../../../public/assets/images/bat-dau.png';
import styles from '../../../bat-dau-bai-hoc.module.scss';

const Index = () => {
  const router = useRouter();
  const [unitInfo, setUnitInfo] = useState<any>({});
  // initialize
  useEffect(() => {
    if (router.query.id) {
      // console.log(router.query);
      setUnitInfo({ ...router.query });
    }
  }, []);
  return (
    <div
      className={`${styles['start-learning-container']} 
      min-vw-100 min-vh-100 d-flex 
      justify-content-center align-items-center`}
    >
      <div className="d-flex flex-column">
        <h2 className="text-center">{unitInfo?.name || ''}</h2>
        <div
          className={`${styles.card} d-flex flex-column justify-content-center align-items-center pt-5`}
        >
          <h3 className="mb-1">
            Số bài luyện tập: {unitInfo?.exerciseCount || ''}
          </h3>
          <h3 className="mb-2">
            Thời gian luyện tập: {unitInfo?.time || ''} phút
          </h3>
          <Link href={`/hoc/lam-bai-tap/${unitInfo?.id}`}>
            <a>
              <button type="button" className="btn btn-link m-0 p-0">
                <Image
                  itemType="button"
                  src={batDauPng}
                  className={styles.startbtn}
                  alt="Bắt Đầu"
                  width={150}
                  height={90}
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
