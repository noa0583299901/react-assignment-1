import { useState } from "react";
import classes from "./Post.module.css";
import { useParams, useOutletContext, Link } from "react-router";

function Post() {
  const { postId } = useParams();
  const { posts, onEdit, onDelete } = useOutletContext();

  const post = posts[Number(postId)];
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post ? post.body : "");

  if (!post) {
    return <div className={classes.wrapper}><p>Post not found</p></div>;
  }

  const { title, body } = post;

  function saveHandler() {
    onEdit(Number(postId), editedContent);
    setIsEditing(false);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2 className={classes.title}>{title}</h2>

        {isEditing ? (
          <div className={classes.editArea}>
            <textarea
              className={classes.textarea}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              rows={5}
            />
            <div className={classes.actions}>
              <button className="btn-add" onClick={saveHandler}>Save Changes</button>
              <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <p className={classes.body}>{body}</p>
            <div className={classes.actions}>
              <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit Post</button>
              <button className="btn-cancel" onClick={() => onDelete(Number(postId))}>Delete</button>
            </div>
          </>
        )}
        
        <div className={classes.backNav}>
            <Link to="/posts" className={classes.backLink}>
              ← Back to All Posts
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;


