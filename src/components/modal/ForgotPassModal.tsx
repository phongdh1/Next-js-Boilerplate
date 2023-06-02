import React, { useState } from 'react';
import AuthCode from 'react-auth-code-input';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './modal.module.scss';

const ForgotPassModal = ({ isShow, onClose }: any) => {
  const [email, setEmail] = useState('');
  const [openEnterEmail, setOpenEnterEmail] = useState(true);
  const [openVerifyCode, setOpenVerifyCode] = useState(false);
  const [openNewPass, setOpenNewPass] = useState(false);
  const [newPass, setNewPass] = useState('');
  const [isCorrectPass, setIsCorrectPass] = useState(false);

  const [result, setResult] = useState('');

  const handleVerify = () => {
    setOpenVerifyCode(true);
    setOpenEnterEmail(false);
  };

  const handleOnChange = (res: string) => {
    setResult(res);
  };

  const handleSetNewPass = () => {
    if (result.length === 4) {
      setOpenNewPass(true);
      setOpenVerifyCode(false);
    }
  };

  const onChangePass = () => {
    if (isCorrectPass) {
      onClose(false);
      setOpenNewPass(false);
    } else {
      // console.log('incorrect');
    }
  };

  return (
    <div>
      {/* Popup */}
      <Modal
        show={isShow}
        onHide={() => {
          onClose(false);
          setOpenVerifyCode(false);
          setOpenEnterEmail(false);
        }}
        onShow={() => {
          setOpenEnterEmail(true);
        }}
        className={styles['custom-modal-content']}
      >
        <Modal.Header closeButton className={styles['custom-modal-header']}>
          <Modal.Title>
            <div className="text-center">Forgot password</div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles['custom-modal-body']}>
          {openVerifyCode && (
            <>
              <div
                style={{
                  width: '100%',
                  padding: '3rem',
                }}
              >
                <div className="text-center">Verify email address</div>
                <div className=" text-center" style={{ fontSize: '14px' }}>
                  Varification code sent to:{' '}
                  <span style={{ color: 'blue' }}>{email}</span>
                </div>
              </div>

              <div className={styles['custom-input']}>
                <AuthCode
                  onChange={handleOnChange}
                  placeholder="_"
                  length={4}
                  allowedCharacters="numeric"
                />
              </div>
            </>
          )}
          {openEnterEmail && (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '3rem',
                }}
              >
                Please write your email to reacive a<br />
                confirmation code to set a new password
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0 1rem 0 0',
                }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: '80%' }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </>
          )}

          {openNewPass && (
            <>
              <div
                style={{
                  width: '100%',
                  padding: '3rem',
                }}
              >
                <div className="text-center">New Password</div>
                <div className=" text-center" style={{ fontSize: '14px' }}>
                  Please write your new password
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0 1rem 0 0',
                  marginBottom: '1rem',
                }}
              >
                <input
                  type="password"
                  placeholder="New Password"
                  style={{ width: '80%' }}
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0 1rem 0 0',
                }}
              >
                <input
                  type="password"
                  placeholder="Confirm Password"
                  style={{ width: '80%' }}
                  onChange={(e) => {
                    if (e.target.value !== newPass) {
                      setIsCorrectPass(false);
                    } else {
                      setIsCorrectPass(true);
                    }
                  }}
                />
              </div>
              {!isCorrectPass && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '4rem',
                    width: '100%',
                    fontSize: '12px',
                    fontStyle: 'italic',
                    color: 'red',
                    marginTop: '1rem',
                    padding: '0 1rem 0 0',
                  }}
                >
                  Password incorrect, please try again
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={styles['custom-modal-footer']}>
          <Button
            variant="warning"
            type="button"
            onClick={() => {
              if (openEnterEmail) {
                handleVerify();
              }
              if (openVerifyCode) {
                handleSetNewPass();
              }
              if (openNewPass) {
                onChangePass();
              }
            }}
          >
            {openEnterEmail && 'Confirm Email'}
            {openVerifyCode && 'Confirm Code'}
            {openNewPass && 'Confirm Password'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgotPassModal;
