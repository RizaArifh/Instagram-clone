import { Avatar, Button, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "../firebase";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  //adding comment
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);


    //postcomment
    const postComment=(event)=>{
      
    }
  return (
    <div className="post">
      {/* {header->avatar+username} */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="avaico"
          src={require("../assets/img/ex1.jpg")}
        />
        <h3>{username}</h3>
      </div>
      {/* {img} */}
      <img className="post__image" src={imageUrl} alt="gambar" />

      {/* {username + caption} */}
      <h4 className="post__text">
        <strong className="post_username_bottom">{username}</strong>
        {caption}
      </h4>

      {/* {comment} */}
      <form>
        <Input
          className="post__input"
          type="text"
          placeholder="add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          disabled={!comment}
          className="post__button"
          type="submit"
          onClick={postComment}
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default Post;
