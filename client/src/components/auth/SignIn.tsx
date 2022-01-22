import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useActions } from "../../lib/hooks/useActions";
import bgStock from "../../assets/stockW.jpeg";
import ForgotPassword from "./modals/ForgotPassoword";

//Sign In component renders the SignIn page
//Sign In component passed the open and setOpen props to its child(Forgot Password component)

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const { signIn } = useActions();
  const history = useHistory();

  //On form submit the SignIn component will log you inside the app
  // signIn is the action creator responsible for signing in
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn({ email, password }, () => {
      history.push("/");
    });
  };
  const setModalOpen = (val: boolean) => {
    setOpen(val);
  };
  return (
    <div className="relative  overflow-hidden">
      <div
        className="relative  pt-6  pb-16 sm:pb-24"
        style={{ height: "100vh" }}
      >
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={bgStock}
            alt="People working on laptops"
          />
          <div className="absolute inset-0 bg-header opacity-80 mix-blend-multiply" />
        </div>
        <main className="mt-16 relative  z-1 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-20 justify-around">
              <div className="px-4 sm:px-6 md:text-center  md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-5xl">
                    <span className="md:inline">
                      Make smarter trade with ORTEX{" "}
                    </span>{" "}
                    <span className="text-theme md:block lg:inline lg:text-4xl xl:text-4xl">
                      award winning stock data and ideas platform
                    </span>
                  </h1>
                </div>
              </div>
              <div className="mt-16 sm:mt-24  lg:mt-0 md:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-center text-xl mb-4 text-gray-700">
                        Sign in with
                      </p>

                      <div className="mt-1 grid grid-cols-3 gap-3">
                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Sign in with Facebook
                            </span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Sign in with Twitter
                            </span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with GitHub</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form
                        onSubmit={onSubmit}
                        action="#"
                        method="POST"
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="Username"
                            autoComplete="Username"
                            placeholder="Username"
                            value={email}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(e.target.value)}
                            className="block w-full shadow-sm focus:ring-theme focus:border-theme sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(e.target.value)}
                            className="block w-full shadow-sm focus:ring-theme focus:border-theme sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="text-sm">
                            <button
                              onClick={() => setOpen((prev) => !prev)}
                              className="font-medium text-themeeeeeeeeee hover:text-indigo-500"
                            >
                              Forgot your password?
                              {open && (
                                <ForgotPassword
                                  open={open}
                                  setOpen={setModalOpen}
                                />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-theme hover:bg-lighttheme focus:outline-none focus:ring-themeng-themeocus:ring-theme"
                          >
                            Login to your account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-md text-center leading-5 text-gray-500">
                      New User ?
                      <Link
                        to="/signup"
                        className="font-medium text-gray-900 ml-4 text-lg hover:underline"
                      >
                        Sign Up
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default SignIn;
