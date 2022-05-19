import Home from "../components/Home";

import User from "../components/User";

import Shop from "../components/Shop";

import News from "../components/News";

import UserAdd from "../components/User/UserAdd";

import UserList from "../components/User/UserList";

import UserEdit from "../components/User/UserEdit";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },

  {
    path: "/user",
    component: User,
    routes: [
      // 嵌套路由配置
      {
        path: "/user/",
        component: UserList,
      },

      {
        path: "/user/add",
        component: UserAdd,
      },

      {
        path: "/user/edit",
        component: UserEdit,
      },
    ],
  },

  {
    path: "/shop",
    component: Shop,
  },

  {
    path: "/news",
    component: News,
  },
];

export default routes;
