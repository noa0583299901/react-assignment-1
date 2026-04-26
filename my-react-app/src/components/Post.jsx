import { useState } from "react";
import classes from "./Post.module.css";

function Post({ author, content, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  function startEditHandler() {
    setIsEditing(true);
  }

  function stopEditHandler() {
    setIsEditing(false);
  }

  function saveHandler() {
    onEdit(editedContent); 
    setIsEditing(false);
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.author}>{author}</h2>
      
      {isEditing ? (
        <div className={classes.editArea}>
          <textarea 
            value={editedContent} 
            onChange={(e) => setEditedContent(e.target.value)}
            rows={3}
          />
          <div className={classes.actions}>
            <button className="btn-add" onClick={saveHandler}>Save</button>
            <button className="btn-cancel" onClick={stopEditHandler}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <p className={classes.content}>{content}</p>
          <div className={classes.actions}>
            
            <button className="btn-edit" onClick={startEditHandler}>Edit</button>
            <button className="btn-log" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;


