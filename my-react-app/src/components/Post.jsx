import styles  from "./Post.module.css";
import { useState } from "react";


function Post({ author, content = "No content provided" }) { 
  const[postContent,setPostContent] =useState (content);
  const handleInputChange=(event)=>{
    setPostContent(event.target.value);
  }
  return (
    <div className={styles.container}> 
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{postContent}</p>
      <input
  onChange={handleInputChange}
  className={styles.input}
  type="text"
  value={postContent} 
  placeholder="Edit post content"
/>
    </div>
    
  );
}

export default Post;


