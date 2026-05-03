
import styles from "./Post.module.css";
import { useNavigate } from "react-router";

function PostPreview({ index, title, body = "" }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${index}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <p className={styles.title}>{title.slice(0, 20)}</p>
      <p className={styles.body}>{body.slice(0, 10)}...</p>
    </div>
  );
}

export default PostPreview;