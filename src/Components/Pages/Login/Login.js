import React, { useEffect } from "react";
import {
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
    if (sloading || gloading) {
      <Loading></Loading>;
    }
  }, [sloading, gloading]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (serror || gerror || errors) {
      toast.error(serror?.message || gerror?.message || errors?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [serror, gerror, errors]);
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
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn"></input>
                </div>
              </form>
              <span className="label label-text text-red-600">
                {/* {signInError} */}
              </span>

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
    </div>
  );
};

export default Login;
