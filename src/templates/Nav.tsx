/* eslint-disable tailwindcss/no-custom-classname */
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from '@/components/login';

import styles from './Nav.module.scss';

const NavBar = () => {
  const [user, setUser] = useState<any | null>(null);
  // const router = useRouter();
  useEffect(() => {
    async function loadUserFromCookies() {
      const userName = Cookies.get('username') as string;
      if (userName) {
        console.log("Got a token in the coFokies, let's see if it is valid");
        // api.defaults.headers.Authorization = `Bearer ${token}`;
        // const { data: user } = await api.get('users/me');
        setUser(userName);
      }
      //  setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = (flag: boolean) => {
    setShow(false);
    if (flag === true) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      refreshPage();
    }
  };
  function onHandleShow(): void {
    return setShow(true);
  }

  function logOut() {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      const neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      };
      Cookies.remove(cookieName, neededAttributes);
    });
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    refreshPage();
  }
  function refreshPage() {
    window.location.pathname = '/';
  }

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div
      className={styles.bgBlue}
      style={{
        backgroundColor: '#2c80e2',
      }}
    >
      <Container>
        <Navbar id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href="/">Hello Kids</Nav.Link>
          </Nav>

          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            variant="pills"
            style={{ backgroundColor: '#2c80e2', color: 'white' }}
          >
            <Nav.Link href="/about">Về sản phẩm</Nav.Link>
            {/* </Nav.Item> */}
            {/* <Nav.Item> */}
            <Nav.Link href="/">Câu hỏi thường gặp</Nav.Link>
            {/* </Nav.Item> */}
            {user ? (
              <>
                {/* <Nav.Item> */}
                <Nav.Link href="/index">Hello : {user}</Nav.Link>
                {/* </Nav.Item> */}
                {/* <Nav.Item> */}
                <Nav.Link onClick={logOut}>Log out</Nav.Link>
                {/* </Nav.Item> */}
              </>
            ) : (
              // <Nav.Item>
              <Nav.Link onClick={onHandleShow}>Đăng Nhập</Nav.Link>
              // </Nav.Item>
            )}
            {/* <Nav.Item> */}
            <Nav.Link onClick={onHandleShow}>Đăng Ký</Nav.Link>
            {/* </Nav.Item> */}
            {/* <Nav.Item> */}
          </Nav>
        </Navbar>
      </Container>

      <Login isShow={show} onCloseLogin={handleClose}></Login>
    </div>
  );
};

export default NavBar;
