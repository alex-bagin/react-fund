import React from "react";
import MyButton from "./UI/button/MyButton";
import { useLinkClickHandler } from "react-router-dom";

const PostItem = function (props) {
  return (
    <div className="post">
      <div className="post__content">
        <h3>
          {props.post.id}
          {"."} {props.post.title}
        </h3>
        <div style={{ fontWeight: "bold" }}>{props.post.email}</div>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={useLinkClickHandler(`/react-fund/posts/${props.post.id}`)}>
          Öffnen
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Entfernen</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
