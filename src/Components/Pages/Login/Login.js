import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../SharedComponents/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, suser, sloading, serror] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, reserror] =
    useSendPasswordResetEmail(auth);

  // ---------------------------------------------------------
  const [userInfo, setuserInfo] = useState({
    email: "",
  });
  // ---------------------------------------------------------
  const [usererror, setusererror] = useState({
    email: "",
  });
  // ---------------------------------------------------------
  const handleEmail = (e) => {
    const emilRegex = /\S+@\S+\.\S+/;
    const validEmail = emilRegex.test(e.target.value);
    if (validEmail) {
      setuserInfo({ ...userInfo, email: e.target.value });
      setusererror({ ...usererror, email: "" });
    } else {
      setusererror({ ...usererror, email: "Invalid email" });
      setuserInfo({ ...userInfo, email: "" });
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // ---------------------------------------------------------
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  // ---------------------------------------------------------
  const handleForgotpass = () => {
    if (!userInfo.email) {
      setusererror({ ...usererror, email: "Please enter your email" });
    } else {
      sendPasswordResetEmail(userInfo.email);
      toast.info("An email has been sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  // ---------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (suser || guser) {
      navigate(from);
    }
  }, [suser, guser, from, navigate]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (sloading || gloading || sending) {
      <Loading></Loading>;
    }
  }, [sloading, gloading, sending]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (serror || gerror || errors || reserror) {
      toast.error(
        serror?.message ||
          gerror?.message ||
          errors?.message ||
          reserror?.message,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [serror, gerror, errors, reserror]);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card md:w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="Email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="label label-text text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label label-text text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                          "Password must be minimum eight characters,at least one letter and one number",
                      },
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <span className="label label-text text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label label-text text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <label className="label">
                  <label
                    htmlFor="my-modal"
                    className=" text-red-600 modal-button label-text-alt link link-hover"
                  >
                    Forgot password?
                  </label>
                </label>
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn"></input>
                </div>
              </form>
              <div className="form-control mt-6">
                <p>
                  Don't have an account?{" "}
                  <Link to="/Register" className="link-hover">
                    Create an account
                  </Link>
                </p>
              </div>
              <div className="divider mt-6">OR</div>
              <div className="form-control mt-6">
                <button onClick={() => signInWithGoogle()} className="btn">
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={handleEmail}
              type="Email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            {usererror?.email && (
              <span className="label label-text text-red-600">
                {usererror.email}
              </span>
            )}
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="btn"
                onClick={handleForgotpass}
              >
                Reset password
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
