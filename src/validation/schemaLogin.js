import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Please enter a username")
    .min(3, "Your username must be at least 3 characters long")
    .max(20, "Your username can't be longer than 20 characters"),
  password: yup
    .string()
    .required("Please enter a password")
    .max(20, "Your password can't be longer than 20 characters"),
});
