import React, { useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";
// import fs from "fs";

const Registration = () => {
  const [users, setUsers] = useState([]);
  console.log("users: ", users);
  const navigate = useNavigate();

  const addNewUser = (elem) => {
    elem.preventDefault();
    const newUser = {
      ...users,
      id: Date.now(),
    };
    setUsers(newUser);
    return navigate("/react-fund/login");
  };

  // let data = fs.readFileSync("../../data/users.json", "utf8");
  // let usersJson = JSON.parse(data);
  // console.log("usersJson: ", usersJson);
  // let userData = JSON.parse(data);
  // setUsers(userData);
  // console.log("users: ", users);

  // fs.writeFile("../../data/users.json", JSON.stringify(users), (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });

  return (
    <section className="app container">
      <div className="register__inner">
        <h1>Account erstellen</h1>
        <form onSubmit={addNewUser}>
          <MyInput
            value={users.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
            type="text"
            name="name"
            id="user"
            placeholder="Name"
            required
          />
          <MyInput
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <MyInput
            type="password"
            placeholder="Passwort"
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            required
          />
          <MyButton>Registrieren</MyButton>
        </form>
      </div>
    </section>
  );
};

export default Registration;
