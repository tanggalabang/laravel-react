import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sessionId, sessionName, sessionToken } from "../constant/localStorage";
import { routeHome } from "../constant/routeName";
import client from "../utils/client";

export default function Signin() {
    const [signinError, setSigninError] = useState(null);
    const email = useRef();
    const password = useRef();
    const nav = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        let body = {
            email: email.current.value,
            password: password.current.value,
        };

        client
            .post("signin", body)
            .then(({ data }) => {
                localStorage.setItem(sessionId, data.data.id);
                localStorage.setItem(sessionName, data.data.name);
                localStorage.setItem(sessionToken, data.data.token);

                nav(routeHome);
            })
            .catch(({ response }) => {
                setSigninError(response.data.message);
            });
    };

    return (
        <main class="main">
            <section class="pt-100 login-register">
                <div class="container">
                    <div class="row login-register-cover">
                        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div class="text-center">
                                <h2 class="mt-10 mb-5 text-brand-1">Signin</h2>
                            </div>
                            {signinError && (
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {signinError}
                                </div>
                            )}
                            <form
                                class="login-register text-start mt-20"
                                onSubmit={handleSignin}
                            >
                                <div class="form-group">
                                    <label class="form-label" for="input-2">
                                        Email *
                                    </label>
                                    <input
                                        class="form-control"
                                        ref={email}
                                        id="input-2"
                                        type="email"
                                        required
                                        name="emailaddress"
                                        placeholder="stevenjob@gmail.com"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="input-4">
                                        Password *
                                    </label>
                                    <input
                                        class="form-control"
                                        ref={password}
                                        id="input-4"
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="************"
                                    />
                                </div>

                                <div class="form-group">
                                    <button
                                        class="btn btn-brand-1 hover-up w-100"
                                        type="submit"
                                        name="login"
                                    >
                                        Signin
                                    </button>
                                </div>
                                <div class="text-muted text-center">
                                    Don't have an account?{" "}
                                    <a href="register">Register</a>
                                </div>
                            </form>
                        </div>
                        <div class="mt-150"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
