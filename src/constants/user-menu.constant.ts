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
