import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("submit", data);
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Welcome</h2>
          <p className="mt-2 text-sm text-gray-400">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
          <Textbox
            placeholder="email@example.com"
            type="email"
            name="email"
            label="Email Address"
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            register={register("email", {
              required: "Email Address is required!",
            })}
            error={errors.email ? errors.email.message : ""}
          />
          <Textbox
            placeholder="Your password"
            type="password"
            name="password"
            label="Password"
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            register={register("password", {
              required: "Password is required!",
            })}
            error={errors.password ? errors.password.message : ""}
          />
          <div className="flex items-center ">
            <div className="flex items-center"></div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <Button
            type="submit"
            label="Sign In"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
