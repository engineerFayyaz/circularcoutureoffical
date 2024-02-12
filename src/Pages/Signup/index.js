import React from "react";

const = Signup = () => {
    return (
        <>
            <div
                className="modal fade default-modal tap-to-close-modal"
                id="forgot_password_modal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                data-controller="reset-password"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content rounded-0">
                        <div className="modal-header border-bottom-0 pb-0">
                            <button
                                type="button"
                                className="close mobile-hide"
                                data-dismiss="modal"
                                aria-label="Close"
                            >

                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body pb-5">
                            <div className="row">
                                <div className="col-12 col-md-9 mx-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="modal-title text-center text-uppercase mb-3">
                                                forgot your password?
                                            </h5>
                                        </div>
                                        <div className="col-12 text-right">
                                            <p className="text-center or-separator px-2 mb-4">

                                                Enter your email address and we'll send a link to
                                                reset your password.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-12"
                                            data-target="reset-password.resetPasswordEmailWrapper"
                                        >
                                            <form
                                                data-action="ajax:success->reset-password#onResetPasswordEmailSuccess"
                                                className="default-form"
                                                action="/users/password"
                                                acceptCharset="UTF-8"
                                                data-remote="true"
                                                method="post"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="authenticity_token"
                                                    defaultValue="wvCHjmL/56gTEYv+fDBVTrmSnBa9nZcMCaJ+9+jzLZ7R96CM07SEgCAC6MYOxAA2th30KenrZDddNio9+6baxQ=="
                                                    autoComplete="off"
                                                />
                                                <p className="signin-paragraph devise-modal-form__error mt-0 mb-1 text-left"></p>
                                                <div
                                                    className="form-group"
                                                    id="email_field_wrapper"
                                                >
                                                    <label htmlFor="user_email">Your Email*</label>
                                                    <input
                                                        autofocus="autofocus"
                                                        className="form-control mb-3"
                                                        id="email_field"
                                                        autoComplete="email"
                                                        type="email"
                                                        name="user[email]"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="submit"
                                                        name="commit"
                                                        defaultValue="reset my password"
                                                        className="btn btn-primary btn-block -dark-red mb-4"
                                                        data-disable-with="sending..."
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-12 text-uppercase text-center">

                                            <Link
                                                to="#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#signin-modal"
                                                className="footer-link js-link-sign-in mobile-hide"
                                            >
                                                &lt; Back
                                            </Link>
                                            <Link
                                                to="#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#signin-modal"
                                                className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                                            >
                                                &lt; Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;