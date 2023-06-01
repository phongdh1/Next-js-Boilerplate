/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React, { useState } from 'react';

import ForgotPassModal from '@/components/modal/ForgotPassModal';
import LoginModal from '@/components/modal/login';
import RegisterModal from '@/components/modal/RegisterModal';

import loginPng from '../../../public/assets/images/v2/btn_login.png';
import registerPng from '../../../public/assets/images/v2/btn_register.png';
import styles from './login.module.scss';

// interface IFormInputs {
//   username: string;
//   password: String;
// }
// interface IToken {
//   user: TObject;
//   password: String;
// }

// type TObject = {
//   username: string;
// };

const Login = () => {
  const [show, setShow] = useState(false);
  const [openForgotPass, setOpenForgotPass] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openTermService, setOpenTermService] = useState(false);
  // const [error, setError] = useState('');
  // const [formValue, setFormValue] = useState({
  //   username: '',
  //   password: '',
  // });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const router = useRouter();

  // async function login(form: IFormInputs) {
  //   try {
  //     const { data: token } = await api.post('users/login', form);
  //     if (token) {
  //       Cookies.set('token', token.accessToken, { expires: 60 });
  //       const deCodeToken = jwt_decode(token.accessToken) as IToken;
  //       Cookies.set('username', deCodeToken.user.username, { expires: 60 });
  //       router.push('/dashboard');
  //       setError('');
  //     }
  //   } catch (e) {
  //     setError('Đăng nhập không thành công');
  //   }
  // }

  return (
    <div className={styles.login_main}>
      <div className="container-fluid d-flex justify-content-start align-items-end min-vh-100">
        <div className="show-down-anima">
          {/* <div className="d-flex w-100 h-100 align-items-center flex-column pt-5">
            <h1 className={styles.header_gradient_shadow}> ĐĂNG NHẬP </h1>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={(e) => {
                e.preventDefault();
                login(formValue);
              }}
            >
              <input
                type="text"
                placeholder="Tên đăng nhập"
                autoComplete="nope"
                onChange={(e) =>
                  setFormValue({ ...formValue, username: e.target.value })
                }
              ></input>
              <input
                type="password"
                autoComplete="nope"
                placeholder="Mật khẩu"
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
              ></input>
              <div className="d-flex">
                <button type="submit" className="btn btn-link p-0 m-0">
                  <Image
                    itemType="button"
                    src={dangNhapPng}
                    className={styles.login_btn}
                    alt="Đăng nhập"
                  />
                </button>
                <button type="button" className="btn btn-link p-0 m-0">
                  <Image
                    itemType="button"
                    src={dangKyPng}
                    className={styles.login_btn}
                    alt="Đăng ký"
                  />
                </button>
              </div>
              <h5 className="text-danger">{error}</h5>
            </form>
          </div> */}
          <div>
            <button
              type="button"
              className="btn btn-link m-0 p-0"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleShow}
            >
              <Image
                itemType="button"
                src={loginPng}
                className={styles.login_btn}
                alt="Đăng ký"
              />
            </button>
            <button
              type="button"
              className="btn btn-link m-0 p-0"
              onClick={() => setOpenRegister(true)}
            >
              <Image
                itemType="button"
                src={registerPng}
                className={styles.login_btn}
                alt="Đăng ký"
              />
            </button>
            <LoginModal
              isShow={show}
              onCloseLogin={handleClose}
              openForgotPass={setOpenForgotPass}
            ></LoginModal>
            <ForgotPassModal
              isShow={openForgotPass}
              onClose={setOpenForgotPass}
            />
            <RegisterModal
              isShow={openRegister}
              onClose={setOpenRegister}
              openTermService={openTermService}
              setOpenTermService={setOpenTermService}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
