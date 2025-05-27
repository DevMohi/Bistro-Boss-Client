import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import loginIllustration from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        title: "Logged in successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      alert("Captcha validated successfully!");
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Captcha validation failed. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss - Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          {/* — Illustration */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src={loginIllustration}
              alt="Login Illustration"
              className="object-cover w-full h-full"
            />
          </div>

          {/* — Form */}
          <div className="md:w-1/2 w-full p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Type here"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Captcha */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <LoadCanvasTemplate />
                </div>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  // ref={captchaRef}
                  placeholder="Type here"
                  required
                  className="block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={disabled}
                className={`
                  w-full py-3 font-medium rounded-md transition ${
                    disabled
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }
                `}
              >
                Sign In
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              New here?{" "}
              <Link to="/signup" className="text-yellow-600 hover:underline">
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
