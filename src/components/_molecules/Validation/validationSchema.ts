import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .max(15, "Must be 15 characters or less"),
  lastName: Yup.string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  email: Yup.string().required("Required").email("Invalid email address"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
});

export default validationSchema;