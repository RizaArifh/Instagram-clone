import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "../firebase";
import firebase from "firebase";
import './ImageUpload.css'

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      //progress bar
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() //get download url from firebase
          .then((url) => {
            //post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className='imageupload' >
      <progress className='imageupload__progress'  value={progress} max="100" />
      <Input
        type="text"
        placeholder="enter caption . . ."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      >
        
      </Input>
      <Input type="file" onChange={handleChange}></Input>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
