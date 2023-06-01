/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React, { useState } from 'react';

import LoadingLogin from '@/components/loading/LoadingLogin';
import ForgotPassModal from '@/components/modal/ForgotPassModal';
import LoginModal from '@/components/modal/login';
import RegisterModal from '@/components/modal/RegisterModal';

import loginPng from '../../../public/assets/images/v2/btn_login.png';
import registerPng from '../../../public/assets/images/v2/btn_register.png';
import styles from './login.module.scss';

const Login = () => {
  const [show, setShow] = useState(false);
  const [openForgotPass, setOpenForgotPass] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openTermService, setOpenTermService] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.login_main}>
        <div className="container-fluid d-flex justify-content-start align-items-end min-vh-100">
          <div className="show-down-anima">
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
                setLoading={setLoading}
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
      {loading && <LoadingLogin time={2000} />}
    </>
  );
};

export default Login;
