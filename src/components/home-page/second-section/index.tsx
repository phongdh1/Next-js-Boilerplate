import { useRouter } from 'next/router';
import React from 'react';

export default function SecondSection() {
  const router = useRouter();
  return (
    <>
      <div className="mt-28 flex w-full flex-row">
        <div className="basis-1/4"></div>
        <div
          className="w-full"
          style={{
            backgroundColor: '#E1CDC1',
            borderRadius: '86px',
            color: '#EC6138',
            height: '5rem',
          }}
        >
          <p className="mt-4 text-center text-3xl font-bold">
            Khó khăn của Phụ huynh khi dạy con học Tiếng Anh
          </p>
        </div>
        <div className="basis-1/4"></div>
      </div>

      {/* Section 2 */}
      <div className="mt-2 flex w-full flex-row">
        <div className="basis-1/4"></div>
        <div className="w-full">
          <div className="columns-4">
            <div className="p-10">
              <img
                className="max-w14"
                src={`${router.basePath}/assets/images/a1.png`} // Route of the image file
                alt="Your Name"
              />
              <p className="pt-4 text-center font-medium">
                Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học Loạn thông
                tin
              </p>
            </div>

            <div className="p-10">
              <img
                className="max-w14"
                src={`${router.basePath}/assets/images/a2.png`} // Route of the image file
                alt="Your Name"
              />
              <p className="pt-4 text-center font-medium">
                Học 1-1 tốn kém. Không chủ động về thời gian. Con chán
              </p>
            </div>
            <div className="p-10">
              <img
                className="max-w14"
                src={`${router.basePath}/assets/images/a3.png`} // Route of the image file
                alt="Your Name"
              />
              <p className="pt-4 text-center font-medium">
                Phụ huynh không biết Tiếng Anh nên không theo sát kèm cặp hỗ trợ
                được con
              </p>
            </div>
            <div className="p-10">
              <img
                className="max-w14"
                src={`${router.basePath}/assets/images/a4.png`} // Route of the image file
                alt="Your Name"
              />
              <p className="pt-4 text-center font-medium">
                Không có khoá học nào 2 in 1 : Vừa theo được khung BGD, vừa
                luyện thi chứng chỉ quốc tế
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>

      {/* Section 3 */}
      <div className="mt-2 flex w-full flex-row">
        <div className="basis-1/4"></div>
        <div className="w-full">
          <div
            style={{
              backgroundColor: '#EC6138',
              height: '3rem',
              position: 'absolute',
              borderRadius: '50px',
              width: '20%',
              marginTop: '-1.5rem',
              left: '40%',
            }}
          >
            <p className="text-center text-3xl font-bold text-white">
              Việc gì khó, có Hello
            </p>
          </div>
          <div
            className="columns-3"
            style={{
              backgroundColor: '#2C80E2',
              borderRadius: '100px',
              color: 'white',
            }}
          >
            <div className="p-10">
              <div
                className="w-16"
                style={{
                  borderRadius: '25px',
                  backgroundColor: 'white',
                  width: '100%',
                  height: '12rem',
                }}
              ></div>
              <p className="pt-4 text-center font-medium">
                Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học Loạn thông
                tin
              </p>
            </div>

            <div className="p-10">
              <div
                className="w-16"
                style={{
                  borderRadius: '25px',
                  backgroundColor: 'white',
                  width: '100%',
                  height: '12rem',
                }}
              ></div>
              <p className="pt-4 text-center font-medium">
                Học 1-1 tốn kém. Không chủ động về thời gian. Con chán
              </p>
            </div>
            <div className="p-10">
              <div
                className="w-16"
                style={{
                  borderRadius: '25px',
                  backgroundColor: 'white',
                  width: '100%',
                  height: '12rem',
                }}
              ></div>
              <p className="pt-4 text-center font-medium">
                Phụ huynh không biết Tiếng Anh nên không theo sát kèm cặp hỗ trợ
                được con
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>

      {/* Section 4 */}
      <div className="mt-28 flex w-full flex-row">
        <div className="basis-1/4"></div>
        <div className="w-full">
          <img
            src={`${router.basePath}/assets/images/Group 14.png`} // Route of the image file
            alt="Your Name"
          />
        </div>
        <div className="basis-1/4"></div>
      </div>

      {/* Section 5 */}
      <div
        className="mt-28 flex w-full flex-row"
        style={{
          backgroundImage: `url(${router.basePath}/assets/images/Group41.png)`,
          color: 'white',
        }}
      >
        <div className="basis-1/4"></div>
        <div className="w-full">
          {/* children1 */}
          <div className="columns-2">
            <div className="w-full">
              <img
                src={`${router.basePath}/assets/images/Group17.png`} // Route of the image file
                alt="Your Name"
                style={{ maxWidth: '120%' }}
              />
            </div>

            <div className="w-full">
              <img
                src={`${router.basePath}/assets/images/Layer_6.png`} // Route of the image file
                alt="Your Name"
                style={{
                  width: '40%',
                  float: 'right',
                  marginTop: '9rem',
                  marginLeft: '12rem',
                }}
              />
            </div>
          </div>
          {/* children2 */}
          <div className="columns-1">
            <div className="w-full">
              <p
                className="mt-4 text-center text-3xl font-bold"
                style={{ textTransform: 'uppercase', fontSize: '3rem' }}
              >
                Lộ trình chuẩn theo khung Bộ Giáo Dục
              </p>
            </div>
          </div>
          {/* children3 */}
          <div className="mt-20 mb-16 columns-1">
            <div className="w-full">
              <img
                src={`${router.basePath}/assets/images/Group 26.png`} // Route of the image file
                alt="Your Name"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
      {/* Section 6 */}
    </>
  );
}
