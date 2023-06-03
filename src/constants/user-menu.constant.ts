import Cookies from 'js-cookie';

export const USER_MENU_LIST = (props: any) => {
  const { router } = props;
  return [
    {
      idx: 1,
      title: 'Thông tin cá nhân',
      imageSrc: '/assets/images/thong-tin.png',
      onClick: () => 1,
    },
    {
      idx: 2,
      title: 'Thoát',
      imageSrc: '/assets/images/thoat.png',
      onClick: () => {
        Cookies.remove('username');
        Cookies.remove('token');
        router?.push('login');
      },
    },
  ];
};

export const HEADER_DATA = (props: any) => {
  const { router } = props;
  return [
    {
      index: 1,
      title: 'Game',
      imageSrc: '/assets/images/header/game.png',
      onClick: () => 1,
    },
    {
      index: 2,
      title: 'List',
      imageSrc: '/assets/images/header/list.png',
      onClick: () => 1,
    },
    {
      index: 3,
      title: 'Cart',
      imageSrc: '/assets/images/header/cart.png',
      onClick: () => 1,
    },
    {
      idx: 4,
      index: 1,
      title: 'Exit',
      imageSrc: '/assets/images/header/exit.png',
      onClick: () => {
        Cookies.remove('username');
        Cookies.remove('token');
        router?.push('login');
      },
    },
  ];
};
