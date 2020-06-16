import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
    state = {
        data: {email: "", password: "", login: ""},
        errors: {}
    };

    schema = {
        email: Joi.string()
            .required()
            .email()
            .label("Email"),
        login: Joi.string()
            .required()
            .min(1)
            .label("Login"),
        password: Joi.string()
            .required()
            .min(1)
            .label("Password")
    };

    doSubmit = async () => {
        try {
            await userService.register(this.state.data);
            window.location = "/login";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({errors});
            }
        }
    };

    render() {
        return (
            <div style={{height: "100vh"}}
                 className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-center">Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("email", "Email")}
                        {this.renderInput("login", "Login")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Register")}
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
