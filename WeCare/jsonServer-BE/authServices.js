import axios from "axios";

const userURL = "http://localhost:8100/users";

export default class Auth {
  static getUser = async (email) => {
    return new Promise((resolve, reject) => {
      axios.get(userURL).then((response) => {
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

  static registerUser = async () => {};

  static authenticateUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      this.getUser(email)
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
}
