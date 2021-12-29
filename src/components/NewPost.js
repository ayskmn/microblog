import React from "react";
import "./NewPost.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "./PostForm";

/** Show post form, and handle editing of it. */

function NewPost() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** Adds post and saves to backend. */

  function add({ title, description, body }) {
    dispatch(sendPostToAPI(title, description, body));
    navigate("/");
  }

  /** Cancel (redirect) */

  function cancel() {
    navigate("/");
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} />
    </main>
  );
}

export default NewPost;