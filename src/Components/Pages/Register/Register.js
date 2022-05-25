import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../SharedComponents/Loading/Loading";
import { toast } from "react-toastify";
import useToken from "../../SharedComponents/Hooks/useToken";

const Register = () => {
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [token] = useToken(cuser || guser);
  // ---------------------------------------------------------
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });
  // ---------------------------------------------------------
  const [usererror, setusererror] = useState({
    email: "",
    password: "",
    Confirmpassword: "",
    allError: "",
  });
  // ---------------------------------------------------------
  const hendlename = (e) => {
    setuserInfo({ ...userInfo, name: e.target.value });
  };
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
  // ---------------------------------------------------------
  const handlePassword = (e) => {
    const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = PasswordRegex.test(e.target.value);
    if (validPassword) {
      setuserInfo({ ...userInfo, password: e.target.value });
      setusererror({ ...usererror, password: "" });
    } else {
      setusererror({
        ...usererror,
        password:
          "Password must be minimum eight characters,at least one letter and one number",
      });
      setuserInfo({ ...userInfo, password: "" });
    }
  };
  // ---------------------------------------------------------
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setuserInfo({ ...userInfo, Confirmpassword: e.target.value });
      setusererror({ ...usererror, Confirmpassword: "" });
    } else {
      setusererror({
        ...usererror,
        Confirmpassword: "Password don't match",
      });
      setuserInfo({ ...userInfo, Confirmpassword: "" });
    }
  };
  const handlecreateUser = (e) => {
    e.preventDefault();
    if (!userInfo.email) {
      setusererror({ ...usererror, email: "Invalid email" });
    }
    if (!userInfo.password) {
      setusererror({
        ...usererror,
        password:
          "Password must be minimum eight characters,at least one letter and one number",
      });
    } else {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      updateProfile({ displayName: userInfo.name });
    }
  };
  // ---------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [from, navigate, token]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (cloading || gloading || updating) {
      <Loading></Loading>;
    }
  }, [cloading, gloading, updating]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (cerror || gerror || error) {
      toast.error(cerror?.message || gerror?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [cerror, gerror, error]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card md:w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handlecreateUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your full name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="input input-bordered"
                    onBlur={hendlename}
                  />
                </div>
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
                  />
                  {usererror?.email && (
                    <span className="label label-text text-red-600">
                      {usererror.email}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    onBlur={handlePassword}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {usererror?.password && (
                    <span className="label label-text text-red-600">
                      {usererror.password}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confrim Passowrd</span>
                  </label>
                  <input
                    onChange={handleConfirmPassword}
                    type="password"
                    name="Confirmpassword"
                    placeholder="Confrim Passowrd"
                    className="input input-bordered"
                  />
                  {usererror?.Confirmpassword && (
                    <span className="label label-text text-red-600">
                      {usererror.Confirmpassword}
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn">Create an account</button>
                </div>
              </form>
              <div className="form-control mt-6">
                <p>
                  Already have an account?{" "}
                  <Link to="/Login" className="link-hover">
                    Login
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

export default Register;
