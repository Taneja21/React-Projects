import axios from "axios";

const learnerURL = "http://localhost:8100/learners";
const instructorURL = "http://localhost:8100/instructors";
const coursesURL = "http://localhost:8100/courses";

export default class Auth {
  static getUser = async (URL, email) => {
    return new Promise((resolve, reject) => {
      axios.get(URL).then((response) => {
        const users = response.data;

        const result = users.find((element) => {
          return element.email === email;
        });

        if (result) {
          resolve(result);
        } else {
          reject("User is not registered");
        }
      });
    });
  };

  registerUser = async () => {};

  static authenticateUser = async (URL, email, password) => {
    return new Promise((resolve, reject) => {
      this.getUser(URL, email)
        .then((user) => {
          if (user.password == password) {
            resolve(user);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  static authenticateLearner = async (email, password) => {
    return new Promise((resolve, reject) => {
      this.authenticateUser(learnerURL, email, password)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  static authenticateInstructor = async (email, password) => {
    return new Promise((resolve, reject) => {
      this.authenticateUser(instructorURL, email, password)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
