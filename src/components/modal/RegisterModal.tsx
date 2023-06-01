/* eslint-disable no-useless-catch */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

import styles from './modal.module.scss';

interface IFormInputs {
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const RegisterModal = ({ isShow, onClose }: any) => {
  const [validated, setValidated] = useState(false);
  const [showTerm, setShowTerm] = useState(false);
  const { register } = useForm<IFormInputs>();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // console.log(form);

    setValidated(true);
    // onClose(true);
  };
  return (
    <div>
      {/* Popup */}
      <Modal
        show={isShow}
        onHide={onClose}
        className={styles['custom-modal-content']}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton className={styles['custom-modal-header']}>
            <Modal.Title>
              <div className="text-center">Register</div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles['custom-modal-body']}>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="email">
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                  required
                  {...register('email')}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a email.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="mobile">
                <Form.Control
                  type="text"
                  autoComplete="off"
                  required
                  placeholder="Mobile"
                  {...register('mobile')}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a mobile.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="password">
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Password"
                  {...register('password')}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="confirmPassword">
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  placeholder="Confirm password"
                  {...register('confirmPassword')}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a confirm password.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={styles['container-item']}>
              <Form.Group className={styles.item} controlId="formBasicCheckbox">
                <Form.Check
                  required
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                >
                  <Form.Check.Input {...register('agree')} required />
                  <Form.Check.Label>
                    <div style={{ fontSize: '16px' }}>
                      Agree to{' '}
                      <button
                        type="button"
                        style={{ color: 'blue' }}
                        onClick={() => {
                          // setOpenTermService(true);
                          setShowTerm(true);
                        }}
                      >
                        Terms of Service
                      </button>
                    </div>
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles['custom-modal-footer']}>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Modal.Footer>
        </Form>
        <Modal
          show={showTerm}
          onHide={() => setShowTerm(false)}
          className={styles['custom-modal-content']}
        >
          <Modal.Header closeButton className={styles['custom-modal-header']}>
            <Modal.Title>
              <div className="text-center">Term of service</div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles['custom-modal-body']}>
            <div
              style={{
                width: '100%',
                padding: '3rem',
              }}
            >
              <div className="" style={{ fontSize: '18px' }}>
                Nội dung của phần thu thập thông tin số điện thoại và email của
                bố mẹ:
                <ul>
                  <li>
                    Gửi báo cáo chi tiết kết quả học tập của bé đến gia đình.
                  </li>
                  <li>
                    Để con được “chơi mà học” trên nhiều nền tảng như điện
                    thoại, máy tính bảng.
                  </li>
                  <li>
                    Hỗ trợ và chăm sóc tận tình cho cả cha mẹ khi gặp sự cố trên
                    ứng dụng.
                  </li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Modal>
    </div>
  );
};

export default RegisterModal;
