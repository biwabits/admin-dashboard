import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'FEATURES',
    group: true,
  },
  // {
  //   title: 'Extra Components',
  //   icon: 'nb-star',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Stepper',
  //       link: '/pages/extra-components/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/extra-components/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/extra-components/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/extra-components/accordion',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Tree',
  //       link: '/pages/extra-components/tree',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/extra-components/tabs',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  {
    title: 'Data Statistik',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      // {
      //   title: 'Charts.js',
      //   link: '/pages/charts/chartjs',
      // },
      // {
      //   title: 'D3',
      //   link: '/pages/charts/d3',
      // },
    ],
  },
  {
    title: 'Pengguna',
    icon: 'nb-tables',
    children: [
      {
        title: 'Daftar Pengguna',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
