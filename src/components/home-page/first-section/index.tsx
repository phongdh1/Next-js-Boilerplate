import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function FistSection() {
  const router = useRouter();
  // const [show, setShow] = useState(false);

  // const handleClose = (flag: boolean) => {
  //   setShow(false);
  //   debugger;
  //   if (flag) {
  //     router.reload(window.location.pathname);
  //   }
  // };
  // function onHandleShow(): void {
  //   return setShow(true);
  // }

  return (
    <Fragment>
      {/* first section */}
      <div
        className="shadow-inner"
        style={{
          width: '100%',
          height: '30rem',
          left: '0px',
          top: '102px',
          backgroundImage: `url(${router.basePath}/assets/images/Rectangle7.png)`,
        }}
      >
        <div
          className="flex flex-row"
          style={{
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            <p className="text-cyellow">
              Ứng dụng học Tiếng Anh cho bé từ 6 - 11 tuổi
            </p>
            <span className="text-content overflow-hidden text-clip">
              Quam totam venenatis sit, nascetur corporis, ornare aptent etiam
              dui, cupidatat magnis dolorum suscipit nulla pretium dolorem mi.
              Conubia mollitia illum doloremque? Incididunt aute lorem,
              exercitation commodo, hendrerit ad mollis ut condimentum, non odit
              aperiam! Nulla. Architecto id mi autem nobis mi, eum ac
              repudiandae corrupti, platea quia! Odio atque.
            </span>
            <div>
              {/* Popup */}
              {/* <Button variant="primary">Đăng Ký</Button> */}
              {/* <Login isShow={show} onCloseLogin={handleClose}></Login> */}
            </div>
            <img
              src={`${router.basePath}/assets/images/pooki.svg`} // Route of the image file
              alt="Your Name"
              style={{
                width: '10rem',
                position: 'absolute',
              }}
            />
          </div>

          <div
            className="basis-1/2"
            style={{
              border: '1px solid',
              height: '20rem',
              backgroundColor: '#ffcb1f',
              borderRadius: '2rem',
            }}
          >
            <video style={{ borderRadius: '2rem' }} controls>
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/780275829/rendition/1080p/file.mp4?loc=external&amp;signature=306b69c4399118d037f338b4eef8f6c20206e79851f25d75e6fd8063cae12c1d"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="basis-1/4"></div>
        </div>
      </div>

      {/* second section */}
      <div
        className="shadow-inner"
        style={{
          width: '100%',
          height: '5rem',
          backgroundColor: '#858585',
        }}
      >
        <div className="flex flex-row">
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            <p className="text-center text-3xl text-amber-400">Meet Pooki</p>
            <button type="button">Đăng Ký</button>
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </Fragment>
  );
}
