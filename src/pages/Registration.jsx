import React, { useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import PasswordField from "../components/PasswordField";
// import fs from "fs/promises";

const Registration = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const addNewUser = (elem) => {
    elem.preventDefault();
    const newUser = {
      ...users,
      id: Date.now(),
    };
    setUsers([newUser]);
    // const user = JSON.stringify(newUser);
    // fs.writeFile("../../data/data.json", user, (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });
    return navigate("/react-fund/login");
  };
  console.log(users);

  return (
    <section className="app container">
      <div className="register__inner">
        <h1>Account erstellen</h1>
        <form>
          <MyInput
            value={users.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
            type="text"
            name="name"
            id="usr"
            placeholder="Username"
          />
          <MyInput
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <PasswordField
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
          />
          <MyButton onClick={addNewUser}>Registrieren</MyButton>
        </form>
      </div>
    </section>
  );
};

export default Registration;
