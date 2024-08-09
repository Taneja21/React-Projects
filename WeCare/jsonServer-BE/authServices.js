import axios from "axios";

const learnerURL = "http://localhost:8100/learners";
const instructorURL = "http://localhost:8100/instructors";
const coursesURL = "http://localhost:8100/courses";

export default class Auth {
  static getUser = async (URL, email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(URL);
        const users = response.data;
        const result = users.find((element) => {
          return element.email === email;
        });
        if (result) {
          resolve(result);
        } else {
          reject("User is not registered");
        }
      } catch (error) {
        console.log("DB error");
      }
    });
  };

  static registerInstrcutor = async (user) => {
    try {
      const response = await axios.post(instructorURL, user);
      if(response){
        return true
      }
    } catch (error) {
      console.log(error)
    }
  };

  static authenticateLearner = async (email, password) => {
    try {
      const user = await this.getUser(learnerURL, email);

      if (user.password == password) {
        return user;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  };

  static authenticateInstructor = async (email, password) => {
    try {
      const user = await this.getUser(instructorURL, email);

      if (user.password == password) {
        return user;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  };
}
