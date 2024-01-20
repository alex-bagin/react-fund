import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", email: "", body: "" });

  const addNewPost = (elem) => {
    elem.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", email: "", body: "" });
  };

  return (
    <div>
      <form onSubmit={addNewPost}>
        {/* Input controlled */}
        <MyInput
          value={post.title}
          onChange={(elem) => setPost({ ...post, title: elem.target.value })}
          type="text"
          placeholder="Name des Posts"
          required
        />
        <MyInput
          value={post.email}
          onChange={(elem) => setPost({ ...post, email: elem.target.value })}
          type="email"
          placeholder="Ihre Email"
          required
        />
        <MyInput
          value={post.body}
          onChange={(elem) => setPost({ ...post, body: elem.target.value })}
          type="text"
          placeholder="Beschreibung des Posts"
          required
        />
        <MyButton>Post erstellen</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
