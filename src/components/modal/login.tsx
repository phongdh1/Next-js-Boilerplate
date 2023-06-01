/* eslint-disable no-useless-catch */
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

import api from '../../utils/service/api';
import styles from './modal.module.scss';

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

function LoginModal(props: any) {
  const { isShow, onCloseLogin, openForgotPass, setLoading } = props;
  const { register, handleSubmit } = useForm<IFormInputs>();
  const router = useRouter();

  async function login(dataObj: IFormInputs) {
    const { username, password } = dataObj;
    setLoading(true);
    onCloseLogin(true);
    try {
      const { data: token } = await api.post('users/login', {
        username,
        password,
      });
      if (token) {
        Cookies.set('token', token.accessToken, { expires: 60 });
        const deCodeToken = jwt_decode(token.accessToken) as IToken;
        Cookies.set('username', deCodeToken.user.username, { expires: 60 });
        setTimeout(() => {
          router.push('/dashboard');
          setLoading(false);
        }, 3000);
      }
    } catch (error) {
      throw error;
    }
  }

  const onSubmit = (data: IFormInputs) => {
    login(data);
  };

  return (
    <div>
      {/* Popup */}
      <Modal
        show={isShow}
        onHide={onCloseLogin}
        className={styles['custom-modal-content']}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton className={styles['custom-modal-header']}>
            <Modal.Title>
              <div className="text-center">Login</div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles['custom-modal-body']}>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="formBasicEmail">
                <Form.Label className={styles.label}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  {...register('username')}
                />
              </Form.Group>
            </div>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="formBasicPassword">
                <Form.Label className={styles.label}>Password: </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                />
              </Form.Group>
            </div>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Modal.Body>
          <Modal.Footer className={styles['custom-modal-footer']}>
            <Button
              variant="warning"
              onClick={() => {
                onCloseLogin(true);
                openForgotPass(true);
              }}
            >
              Forgot password
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;
