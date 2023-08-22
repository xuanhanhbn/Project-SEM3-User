export const inputHomeDonate = [
  {
    placeHolder: "Full Name",
    field: "fullName",
    type: "INPUT",
    // icon: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     height="1em"
    //     viewBox="0 0 448 512"
    //     fill="#00000033"
    //   >
    //     <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    //   </svg>
    // ),
  },
  {
    placeHolder: "Email Address",
    field: "email",
    type: "INPUT",
    // icon: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     height="1em"
    //     viewBox="0 0 448 512"
    //     fill="#00000033"
    //   >
    //     <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
    //   </svg>
    // ),
  },

  {
    placeHolder: "Select Causes",
    field: "selectCauses",
    type: "SELECT",
    // icon: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     height="1em"
    //     viewBox="0 0 512 512"
    //     fill="#00000033"
    //   >
    //     <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    //   </svg>
    // ),
  },
  {
    placeHolder: "Amount",
    field: "amount",
    type: "INPUT",
    // icon: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     height="1em"
    //     viewBox="0 0 576 512"
    //     fill="#00000033"
    //   >
    //     <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
    //   </svg>
    // ),
  },
];

export type typeInputDonate = {
  placeHolder: string,
  field: string,
  type: string,
}

export const listCauses = [
  {
    field: "",
    value: "",
  },
  {
    field: "houseWashing",
    value: "House Washing",
  },
  {
    field: "roofCleaning",
    value: "Roof Cleaning",
  },
  {
    field: "drivewayCleaning",
    value: "Driveway Cleaning",
  },
  {
    field: "gutterCleaning",
    value: "Gutter Cleaning",
  },
];

export const radioPayload = [
  {
    field: "creditCard",
    value: "Credit Card",
  },
  {
    field: "paypal",
    value: "Paypal",
  },
  {
    field: "payoneer",
    value: "Payoneer",
  },
];
