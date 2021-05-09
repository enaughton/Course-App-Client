import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import "../index.css";
const path = "/courses";
const url = config.apiBaseUrl;

// Courses is the Component is used to Display All the Courses that are returned from the API.
class Courses extends React.Component {
  constructor() {
    super();
    this.state = { course: [] };
  }

  componentDidMount() {
    fetch(url + path)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          course: responseData.course,
        });
        console.log(this.state.course);
      });
  }

  render() {
    return (
      <div>
        <div class="grid gap-4 grid-cols-3 space-x-4 w-full bg-white shadow-md rounded-lg md:overflow-hidden mx-auto">
          {this.state.course.map((course) => (
            <div
              key={course.id}
              class="ml-8 py-4 bg-indigo-600 border-blue-600 dark:bg-gray-800 bg-opacity-95 overflow-hidden border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around overflow-hidden cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500"
            >
              <button>
                <Link
                  className="course--module course--link"
                  to={`/courses/${course.id}`}
                >
                  <h3 class="text-black dark:text-gray-100 text-justify font-semibold">
                    {course.title}
                  </h3>
                  <h5>Course Time: {course.estimatedTime}</h5>
                  <p>
                    By {course.user.firstName} {course.user.lastName}
                  </p>
                </Link>
              </button>
            </div>
          ))}

          <div class="ml-8 bg-indigo-600 border-blue-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-blue-600 hover:border-transparent | transition-colors duration-500">
            <button>
              <Link
                className="course--module course--add--module"
                to="/courses/create/"
              >
                <h3 className="course--add--title">New Course</h3>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Courses;
