import { Layout } from "layout";
import { paths } from "lib/constants";
import { Home } from "pages";
import { lazy } from "react";

const routes = [
  {
    route: "*",
    component: Layout,
    routes: [
      {
        path: paths.Landing,
        exact: true,
        component: lazy(() => import("pages/home/Home")),
      },
      {
        path: paths.about,
        component: lazy(() => import("pages/about/AboutPage")),
      },
      {
        path: paths.service,
        component: lazy(() => import("pages/service/ServicePage")),
      },
    ],
  },
];

export default routes;
