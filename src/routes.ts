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
        path: paths.ourpartner,
        component: lazy(() => import("pages/ourpartner/OurPartnerPage")),
      },
      {
        path: paths.helpcentre,
        component: lazy(() => import("pages/helpcentre/HelpCentrePage")),
      },
      {
        path: paths.causedetails,
        component: lazy(
          () => import("pages/home/components/causedetails/CauseDetailsPage")
        ),
      },
      {
        path: paths.blogdetails,
        component: lazy(() => import("pages/blog/blogdetails/BlogDetailsPage")),
      },
      {
        path: paths.login,
        component: lazy(() => import("pages/login/LoginPage")),
      },
      {
        path: paths.partnerdetail,
        component: lazy(
          () =>
            import(
              "pages/ourpartner/components/partnersdetails/PartnerDetailPage"
            )
        ),
      },
      {
        path: paths.signup,
        component: lazy(() => import("pages/signup/SignupPage")),
      },
      {
        path: paths.forgotpassword,
        component: lazy(
          () => import("pages/forgotpassword/ForgotPasswordPage")
        ),
      },
    ],
  },
];

export default routes;
