import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";


function Post({username,caption,imageUrl}) {

  return (
    <div className="post">
        <div className='post__header'>
      <Avatar
        className="post__avatar"
        alt='avaico'
        src={require("../assets/img/ex1.jpg")}
      />
      <h3>{username}</h3>
      </div>
      {/* {header->avatar+username} */}
      <img
        className="post__image"
        src={imageUrl}
        alt="gambar"
      />
      {/* {img} */}
      {/* {username + caption} */}
      <h4 className="post__text">
        <strong className='post_username_bottom' >{username}</strong>{caption}
      </h4>
    </div>
  );
}

export default Post;
