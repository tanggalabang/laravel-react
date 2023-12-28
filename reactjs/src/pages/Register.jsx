import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../utils/client";
import { routeSignin } from "../constant/routeName";

export default function Signin() {
  const [registrationError, setRegistrationError] = useState(null);

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const nav = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();

      let body = {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
      };

      client.post("register", body)
          .then(({ data }) => {
              nav(routeSignin);
          })
          .catch((error) => {
              setRegistrationError('The email has already been taken.'); 
          });
  };


    return (
        <main className="main">
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <h2 className="mt-10 mb-5 text-brand-1">
                                    Register
                                </h2>
                            </div>
                            {registrationError && ( 
                                <div className="alert alert-danger" role="alert">
                                    {registrationError}
                                </div>
                            )}
                            <form
                                className="login-register text-start mt-20"
                                onSubmit={handleRegister}
                            >
                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="input-1"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        className="form-control"
                                        ref={name}
                                        id="input-1"
                                        type="text"
                                        required
                                        name="fullname"
                                        placeholder="Steven Job"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="input-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        className="form-control"
                                        ref={email}
                                        id="input-2"
                                        type="email"
                                        required
                                        name="emailaddress"
                                        placeholder="stevenjob@gmail.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="input-4"
                                    >
                                        Password *
                                    </label>
                                    <input
                                        className="form-control"
                                        ref={password}
                                        id="input-4"
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="************"
                                    />
                                </div>

                                <div className="form-group">
                                    <button
                                        className="btn btn-brand-1 hover-up w-100"
                                        type="submit"
                                        name="login"
                                    >
                                        Submit &amp; Register
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Already have an account?{" "}
                                    <a href="signin">Sign in</a>
                                </div>
                            </form>
                        </div>
                        <div className="mt-150"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
