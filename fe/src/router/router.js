const { MainLayout } = require("../layout");
const { Homepage } = require("../pages");

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
		component: Homepage,
		layout: MainLayout,
	},
];
