import { useState, useEffect } from 'react'; 
import { Outlet, NavLink } from 'react-router';
import Post from "./Post";
import NewPost from "./NewPost";
import PostPreview from "./PostPreview";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        setPosts([]);
      });
  }, []);

  const handleEditPost = (index, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index] = { ...updatedPosts[index], body: newContent };
      return updatedPosts;
    });
  };

  const handleAddPost = (title, body) => {
    setPosts((prevPosts) => [{ title: title, body: body }, ...prevPosts]);
  };

  const handleDeletePost = (indexToDelete) => {
    setPosts((prevPosts) => prevPosts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <NavLink className="btn-add" to="new">
          + Add New Post
        </NavLink>
        <button className="btn-log" onClick={() => console.log(posts)}>
          Log Posts
        </button>
      </div>

      <Outlet context={{ 
        posts, 
        isLoading, 
        error, 
        onAdd: handleAddPost, 
        onEdit: handleEditPost,
        onDelete: handleDeletePost 
      }} />
    </>
  );
}

export default Posts;