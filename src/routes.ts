import { Layout } from "layout";
import { paths } from "lib/constants";
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
        path: paths.contact,
        component: lazy(() => import("pages/contact/ContactPage")),
      },
      {
        path: paths.gallery,
        component: lazy(() => import("pages/gallery/GalleryPage")),
      },
      {
        path: paths.donation,
        component: lazy(() => import("pages/donation/DonationPage")),
      },
      {
        path: paths.outpartner,
        component: lazy(() => import("pages/outpartner/OurPartnerPage")),
      },
      {
        path: paths.helpcentre,
        component: lazy(() => import("pages/helpcentre/HelpCentrePage")),
      },
    ],
  },
];

export default routes;
