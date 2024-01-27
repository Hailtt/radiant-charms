import empty from "../layout/empty";

const { MainLayout } = require("../layout");
const { Homepage, LoginRegister } = require("../pages");
export const PRIVATE_ROUTERS = [
  {
    path: "/",
    component: Homepage,
    layout: MainLayout,
  },
  // {
  //     path: "/product",
  //     component: Product,
  //     layout: MainLayout
  // }
];
export const PUBLIC_ROUTERS = [
  {
    path: "/",
    component: LoginRegister,
    layout: empty,
  },
  {
    path: "/login",
    component: LoginRegister,
    layout: empty,
  },
  {
    path: "/register",
    component: LoginRegister,
    layout: empty,
  },
];
