import React from "react";
import MyInput from "./UI/input/MyInput";

const PasswordField = () => {
  //   const passwordHintId = useId();
  //   console.log(passwordHintId);

  return (
    <>
      <MyInput type="password" placeholder="Passwort" />
      {/* <p id={passwordHintId}>Das Passwort sollte mindestens 12 Zeichen enthalten</p>aria-describedby={passwordHintId} */}
    </>
  );
};

export default PasswordField;
