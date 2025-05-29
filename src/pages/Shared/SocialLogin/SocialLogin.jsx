import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useContext(AuthContext);
  const naviagte = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("Hello");
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photoURL: res.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        naviagte("/");
      });
    });
  };
  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn ">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
