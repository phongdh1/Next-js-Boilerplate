import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import dangKyPng from '../../../public/assets/images/dang-ky.png';
import dangNhapPng from '../../../public/assets/images/dang-nhap.png';
import api from '../../utils/service/api';
import styles from './login.module.scss';

interface IFormInputs {
  username: string;
  password: String;
}
interface IToken {
  user: TObject;
  password: String;
}

type TObject = {
  username: string;
};

const Login = () => {
  const [error, setError] = useState('');
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });
  const router = useRouter();

  async function login(form: IFormInputs) {
    try {
      const { data: token } = await api.post('users/login', form);
      if (token) {
        Cookies.set('token', token.accessToken, { expires: 60 });
        const deCodeToken = jwt_decode(token.accessToken) as IToken;
        Cookies.set('username', deCodeToken.user.username, { expires: 60 });
        router.push('/dashboard');
        setError('');
      }
    } catch (e) {
      setError('Đăng nhập không thành công');
    }
  }

  return (
    <div className={styles.login_main}>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 ">
        <div className={styles.login_container}>
          <div className="d-flex w-100 h-100 align-items-center flex-column pt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
