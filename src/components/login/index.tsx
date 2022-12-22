import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

import api from '../../utils/service/api';

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

function Login(props: any) {
  const { isShow, onCloseLogin } = props;
  const {
    register,
    handleSubmit,
    // reset,
    // eslint-disable-next-line unused-imports/no-unused-vars
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    login(data);
    // reset();
  };

  async function login(dataObj: IFormInputs) {
    const { username, password } = dataObj;
    // eslint-disable-next-line no-useless-catch
    try {
      const { data: token } = await api.post('users/login', {
        username,
        password,
      });
      if (token) {
        Cookies.set('token', token.accessToken, { expires: 60 });
        const deCodeToken = jwt_decode(token.accessToken) as IToken;
        Cookies.set('username', deCodeToken.user.username, { expires: 60 });
        onCloseLogin(true);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      {/* Popup */}
      <Modal show={isShow} onHide={onCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng Nhập</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên đăng nhập:</Form.Label>
              <Form.Control
                type="text"
                placeholder="User name"
                {...register('username')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu: </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('password')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseLogin}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
