import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default class UserSignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    errors: [],
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              version="1.1"
              fill="#e4e4e4"
              id="svg_icon.primary"
              x="212"
              y="124"
              width="120"
              height="120"
            >
              <g id="surface1" fill="#e4e4e4">
                <path
                  d="M 47.8125 2.1875 L 40 6.09375 L 39.84375 6.15625 L 39.75 6.28125 L 35.8125 10.21875 C 33.960938 8.789063 31.710938 7.871094 29.4375 7.53125 C 26.324219 7.0625 23.105469 7.660156 21.03125 9.8125 C 17.46875 13.507813 17.617188 19.996094 21.21875 24.78125 L 19.0625 26.9375 L 12 19.46875 C 11.769531 19.21875 11.429688 19.097656 11.09375 19.15625 C 10.839844 19.207031 10.617188 19.351563 10.46875 19.5625 L 5.71875 26.09375 C 5.476563 26.425781 5.464844 26.871094 5.6875 27.21875 L 10.90625 35.125 L 6.28125 39.75 L 6.15625 39.84375 L 6.09375 40 L 2.1875 47.8125 L 10 43.90625 L 10.15625 43.84375 L 10.25 43.71875 L 14.0625 39.90625 L 18.40625 46.46875 C 18.578125 46.722656 18.851563 46.882813 19.15625 46.910156 C 19.460938 46.933594 19.761719 46.816406 19.96875 46.59375 L 22.9375 43.375 C 23.285156 42.992188 23.285156 42.414063 22.9375 42.03125 C 22.675781 41.738281 22.53125 41.410156 22.53125 41.03125 C 22.53125 40.167969 23.230469 39.5 24.09375 39.5 C 24.410156 39.5 24.695313 39.613281 25 39.84375 C 25.414063 40.15625 25.996094 40.101563 26.34375 39.71875 L 28.0625 37.84375 C 28.425781 37.457031 28.425781 36.855469 28.0625 36.46875 L 22.9375 31.03125 L 25.5 28.46875 C 29.402344 30.542969 34.171875 30.511719 37.46875 27.78125 C 41.234375 24.660156 41.652344 19.144531 39.375 14.59375 L 43.71875 10.25 L 43.84375 10.15625 L 43.90625 10 Z M 43.34375 6.65625 L 42.1875 8.96875 L 38.3125 12.84375 C 38.113281 12.5625 37.910156 12.269531 37.6875 12 C 37.558594 11.84375 37.417969 11.710938 37.28125 11.5625 L 41.03125 7.8125 Z M 27.15625 9.375 C 27.789063 9.351563 28.460938 9.398438 29.125 9.5 C 31.78125 9.898438 34.492188 11.273438 36.15625 13.28125 C 39.574219 17.40625 39.691406 23.316406 36.1875 26.21875 C 32.683594 29.121094 26.542969 28.148438 23.15625 24.0625 C 19.730469 19.929688 19.667969 14.125 22.46875 11.21875 C 23.574219 10.070313 25.257813 9.445313 27.15625 9.375 Z M 25.21875 10.3125 C 24.316406 10.421875 23.40625 10.875 22.71875 11.59375 C 21.339844 13.027344 21.050781 15.292969 22.4375 16.625 C 23.824219 17.957031 26.0625 17.558594 27.4375 16.125 C 28.816406 14.691406 29.105469 12.457031 27.71875 11.125 C 27.023438 10.460938 26.121094 10.203125 25.21875 10.3125 Z M 25.375 12.3125 C 25.769531 12.253906 26.132813 12.359375 26.34375 12.5625 C 26.761719 12.964844 26.773438 13.945313 26 14.75 C 25.226563 15.554688 24.230469 15.589844 23.8125 15.1875 C 23.394531 14.785156 23.382813 13.804688 24.15625 13 C 24.542969 12.597656 24.980469 12.371094 25.375 12.3125 Z M 11.375 21.71875 L 25.96875 37.1875 L 25.28125 37.9375 C 24.890625 37.769531 24.566406 37.5 24.09375 37.5 C 22.148438 37.5 20.53125 39.085938 20.53125 41.03125 C 20.53125 41.582031 20.871094 41.984375 21.09375 42.4375 L 19.375 44.28125 L 7.75 26.71875 Z M 11.1875 25.15625 C 10.46875 25.15625 9.875 25.75 9.875 26.46875 C 9.875 27.1875 10.46875 27.75 11.1875 27.75 C 11.90625 27.75 12.5 27.1875 12.5 26.46875 C 12.5 25.75 11.90625 25.15625 11.1875 25.15625 Z M 22.5625 26.3125 C 22.953125 26.691406 23.351563 27.050781 23.78125 27.375 L 21.5625 29.59375 L 20.46875 28.40625 Z M 15 26.875 C 14.554688 26.875 14.1875 27.242188 14.1875 27.6875 C 14.1875 28.132813 14.554688 28.46875 15 28.46875 C 15.445313 28.46875 15.78125 28.132813 15.78125 27.6875 C 15.78125 27.242188 15.445313 26.875 15 26.875 Z M 12.03125 36.8125 L 12.9375 38.1875 L 8.96875 42.1875 L 6.65625 43.34375 L 7.8125 41.03125 Z "
                  fill="indigo"
                ></path>
              </g>
            </svg>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up form your account
            </h2>
          </div>
          <Form
            className="mt-8 space-y-6"
            cancel={this.cancel}
            errors={this.state.errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="pd-2">
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.change}
                      placeholder="First Name"
                    />
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.change}
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                      value={this.state.emailAddress}
                      onChange={this.change}
                      placeholder="Email Address"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      value={this.state.password}
                      onChange={this.change}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={this.state.confirmPassword}
                      onChange={this.change}
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
    } = this.state;

    // Create user
    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
    };
    console.log(user);
    if (confirmPassword !== password) {
      this.setState(() => {
        return {
          errors: ["Password Does Not Match Confirm Password"],
        };
      });
    } else {
      context.data
        .createUser(user)
        .then((errors) => {
          if (errors.length) {
            console.log(errors);
            this.setState(() => {
              return {
                errors: [errors],
              };
            });
          } else {
            context.actions.signIn(emailAddress, password).then(() => {
              this.props.history.push("/");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.props.history.push("/error");
        });
    }
  };

  cancel = () => {
    this.props.history.push("/");
  };
}
