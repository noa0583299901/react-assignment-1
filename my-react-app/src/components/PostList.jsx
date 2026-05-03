import PostPreview from "./PostPreview";
import { useOutletContext, NavLink } from "react-router";

function PostList() {
  
  const { posts, isLoading, error } = useOutletContext();

  return (
    
    <div className="posts-list-container">
      
{isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p style={{ color: "#ff5252" }}>Error: {error}</p>
      ) : (
        posts.map((post, index) => (
          <PostPreview
            key={index}
            index={index}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </div>
  );
}

export default PostList;