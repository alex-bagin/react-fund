/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "./UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const [fetchPostById, postIsLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response);
  });
  const [fetchComments, commenstIsLoading, commetnsError] = useFetching(async (id) => {
    const response = await PostService.getCommetnsById(id);
    setComments(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app container">
      <h1>
        Sie haben die Seite des Posts mit der ID{" "}
        <strong style={{ color: "green", fontWeight: "bold", fontSize: 36, fontStyle: "italic" }}>
          [ {params.id} ]
        </strong>{" "}
        geöffnet.
      </h1>
      {postIsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <h2 style={{ marginTop: 15 }}>
          {post.id}
          {". "}
          {post.title}
        </h2>
      )}
      <h2 style={{ marginTop: 15 }}>Kommentare</h2>
      {!commenstIsLoading && (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h4>{comm.email}</h4>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
