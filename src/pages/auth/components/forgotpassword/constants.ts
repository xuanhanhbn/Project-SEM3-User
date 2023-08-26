import * as Yup from "yup";

export const inputForgotPassword = [
  {
    field: "userName",
    placeHolder: "User Name",
    type: "INPUT",
  },
  {
    field: "email",
    placeHolder: "Email Address",
    type: "INPUT",
  },

  {
    field: "password",
    placeHolder: "Password",
    type: "INPUT",
  },
  {
    field: "confirmPassword",
    placeHolder: "Confirm Password",
    type: "INPUT",
  },
];

export type typeInputinputForgotPassword = {
  field: string;
  placeHolder: string;
  type: string;
};

export type DataRequestInput = {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
