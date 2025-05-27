import { Link, useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        console.log("User profile updated successfully");
        reset();
        //use toaster 
        alert("User created successfully");
        navigate("/");
      });

    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss - Sign Up</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          {/* Form Section */}
          <div className="md:w-1/2 w-full p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: "Name can only include letters and spaces",
                    },
                  })}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label
                  htmlFor="Photo URL"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  {...register("photoURL", {
                    required: "Photo URL is required",
                  })}
                  id="photoURL"
                  name="photoURL"
                  type="text"
                  placeholder="Type here"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be no more than 20 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,20}$/,
                      message:
                        "Password must include uppercase, lowercase, number, and special character",
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition"
              >
                Register
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-600 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Illustration Section */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src={loginIllustration}
              alt="Sign Up Illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
