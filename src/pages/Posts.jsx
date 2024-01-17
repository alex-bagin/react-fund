/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import "../styles/App.css";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="app container">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Post erstellen
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0", border: "1px solid blue" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue={"Anzahl der Posts auf der Seite"}
        options={[
          { value: 5, name: 5 },
          { value: 10, name: 10 },
          { value: 25, name: 25 },
          { value: -1, name: "Alle Anzeigen" },
        ]}
      />
      {postError && (
        <>
          <h1 style={{ textAlign: "center", color: "red" }}>
            Es ist ein Fehler aufgetreten
            <br />
            Error: {postError}
          </h1>
          <br />
        </>
      )}
      {isPostsLoading && <Loader />}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts for JS"} />
      <div ref={lastElement} />

      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
