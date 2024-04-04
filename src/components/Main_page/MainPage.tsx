import React from "react";
import { useFormik } from "formik";
import errorImage from "../Images/error.svg";
import LeftSide from "./_atoms/LeftSide/LeftSide";
import RightTop from "./_atoms/RigthSide/RightTop/RightTop";
import RightFooter from "./_atoms/RigthSide/RightFooter/RightFooter";
import validationSchema from "../_molecules/Validation/validationSchema";

const MainPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
    },
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] h-auto md:h-[600px] justify-between">
        <LeftSide/>
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[540px]">
          <RightTop/>
          <div className="w-full bg-white rounded-md my-[20px] px-[40px]">
            <form
              onSubmit={formik.handleSubmit}
              className="grid gap-[20px] py-[40px]"
            >
              <div className="relative">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`border shadow-xl w-full h-[56px] outline-none px-[32px] ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-300"
                      : "border-white"
                  }`}
                  type="text"
                  placeholder={
                    formik.touched.firstName && formik.errors.firstName
                      ? ""
                      : "First Name"
                  }
                  name="firstName"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="absolute top-1/2 right-[12px] transform -translate-y-1/2 w-[20px] h-[20px]"
                  />
                )}
              </div>
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-[#FF7979] text-[11px] text-right">
                  First Name cannot be empty
                </p>
              ) : null}

              <div className="relative">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`border shadow-xl w-full h-[56px] outline-none px-[32px] ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-300"
                      : "border-white"
                  }`}
                  type="text"
                  placeholder={
                    formik.touched.lastName && formik.errors.lastName
                      ? ""
                      : "Last Name"
                  }
                  name="lastName"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="absolute top-1/2 right-[12px] transform -translate-y-1/2 w-[20px] h-[20px]"
                  />
                )}
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-[#FF7979] text-[11px] text-right">
                  Last Name cannot be empty
                </p>
              ) : null}

              <div className="relative">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={
                    formik.touched.email && formik.errors.email
                      ? "email@example/com"
                      : "Email"
                  }
                  className={`border shadow-xl w-full h-[56px] outline-none px-[32px] ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-300"
                      : "border-white"
                  }`}
                  type="email"
                  name="email"
                />
                {formik.touched.email && formik.errors.email && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="absolute top-1/2 right-[12px] transform -translate-y-1/2 w-[20px] h-[20px]"
                  />
                )}
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-[#FF7979] text-[11px] text-right">
                  Invalid email address
                </p>
              ) : null}

              <div className="relative">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`border shadow-xl w-full h-[56px] outline-none px-[32px] ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-300"
                      : "border-white"
                  }`}
                  type="password"
                  placeholder={
                    formik.touched.password && formik.errors.password
                      ? ""
                      : "Password"
                  }
                  name="password"
                />
                {formik.touched.password && formik.errors.password && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="absolute top-1/2 right-[12px] transform -translate-y-1/2 w-[20px] h-[20px]"
                  />
                )}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-[#FF7979] text-[11px] text-right">
                  Password cannot be empty
                </p>
              ) : null}

              <button
                className="border shadow-xl w-full h-[56px] rounded-md bg-[#38CC8B] text-white font-semibold font-mainFont"
                type="submit"
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <RightFooter/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
