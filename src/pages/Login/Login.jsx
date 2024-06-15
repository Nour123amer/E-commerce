import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { userContext } from "../../Context/User.context";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const { token,setToken ,data} = useContext(userContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),

    password: Yup.string()
      .required("password is required")
      .matches(
        /^[A-Z][0-9a-zA-Z]{5,25}$/,
        "password must start with uppercase letter"
      ),
    // repassword: Yup.string()
    //   .required("repassword is required")
    //   .oneOf(
    //     [Yup.ref("password")],
    //     "password and repassword should be the same"
    //   ),
  });
  async function sedDataToRegister(values) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };
      toast.loading("Waiting...");
      const { data } = await axios.request(options);
      console.log(data);
      toast.dismiss();

      toast.success("User logged in successfully");

      // setTimeout(() => {
        if (data.message === "success") {
          setToken(data.token);
          navigate("/")
        }
      // }, 3000);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

      
    },
    validationSchema,
    onSubmit: sedDataToRegister,
  });
  return (
    <section>
      <h2 className="mb-6">
        <i className="fa-regular fa-circle-user me-3"></i>
        <span>Login Now</span>
      </h2>
      <form className="space-y-3" onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="email"
            className="form-control w-full"
            placeholder="Email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-600 font-semibold mt-2">
              * {formik.errors.email}
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          <input
            type="password"
            className="form-control w-full"
            placeholder="Password"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-600 font-semibold mt-2">
              * {formik.errors.password}
            </div>
          ) : (
            ""
          )}
        </div>

        <button 
        type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </section>
  );
}
