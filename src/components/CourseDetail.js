import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import config from "../config.js";
const path = `/courses/`;
const url = config.apiBaseUrl;

const ReactMarkdown = require("react-markdown");
class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [],
      user: [],
      authenticatedUser: Cookies.getJSON("authenticatedUser") || null,
    };
  }
  // This CourseDetail Component Displays the Course Data returned from the API
  componentDidMount() {
    fetch(url + path + this.props.match.params.id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          course: responseData.course,
          user: responseData.course.user,
        });
      });
  }

  render() {
    const authUser = this.state.authenticatedUser;

    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="flex">
              {authUser && authUser.userId === this.state.user.id ? (
                <React.Fragment>
                  <span className="flex">
                    <button className="flex m-4  text-white justify-center p-4 bg-indigo-900">
                      <Link
                        className="button"
                        to={`/courses/${this.props.match.params.id}/update`}
                      >
                        {" "}
                        Update Course{" "}
                      </Link>
                    </button>
                    <button className="flex m-4 justify-center p-4 bg-blue-500">
                      <Link
                        className="button"
                        to={`/courses/${this.props.match.params.id}/delete`}
                      >
                        Delete Course
                      </Link>
                    </button>
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
              <button className="flex m-4 justify-center text-white p-4 bg-gray-500">
                <a className="button button-secondary" href="/">
                  Return to List
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center bounds course--detail">
          <div className="max-w-max">
            <div className="course--header">
              <h3 className="flex text-black dark:text-gray-100  justify-center text-justify font-semibold">
                {this.state.course.title}
              </h3>
              <p className="flex text-black dark:text-gray-100  justify-center text-justify font-semibold">
                By {this.state.user.firstName} {this.state.user.lastName}
              </p>
            </div>
            <h4 className="m-2 flex text-black dark:text-gray-100 justify-start text-justify font-semibold">
              {" "}
              Estimated Time: {this.state.course.estimatedTime}
            </h4>
            <div className="flex m-2 p-4 text-black dark:text-gray-100  border border-gray-500 text-justify font-semibold">
              <div className="  w-2/3 p-4 border border-gray-500 text-lg">
                <ReactMarkdown source={this.state.course.description} />
              </div>
              <div className="flex m-4 p-4 w-2/5 border border-red-500">
                <h4 className="flex">Materials Needed</h4>
                <p className="flex p-4 ">
                  <ReactMarkdown source={this.state.course.materialsNeeded} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CourseDetail;
