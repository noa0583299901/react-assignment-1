import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import NewPost from './components/NewPost'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([
    { author: "Noa Knopf", content: "this is my first post" },
    { author: "Tamar", content: " Hi" },
    { author: "Shira", content: "No content provided"}
  ]);

  const handleAddPost = (name, content) => {
    setPosts((prevPosts) => [{ author: name, content: content }, ...prevPosts]);
    setIsFormOpen(false);
  };

  const handleDeletePost = (indexToDelete) => {
    setPosts((prevPosts) => prevPosts.filter((_, index) => index !== indexToDelete));
  };

  const handleEditPost = (indexToEdit, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[indexToEdit] = { ...updatedPosts[indexToEdit], content: newContent };
      return updatedPosts;
    });
  };

  return (
    <div className="app-container">
      {posts.map((post, index) => (
        <Post 
          key={index} 
          author={post.author} 
          content={post.content} 
          onDelete={() => handleDeletePost(index)}
          onEdit={(newContent) => handleEditPost(index, newContent)}
        />
      ))}

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button className="btn-add" onClick={() => setIsFormOpen(true)}>+ Add New Post</button>
        <button className="btn-log" onClick={() => console.log(posts)}>Log Posts</button>
      </div>

      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
           <div onClick={(e) => e.stopPropagation()}>
              <NewPost closedialog={() => setIsFormOpen(false)} onAdd={handleAddPost}/>
           </div>
        </div>
      )}
    </div>
  );
}

export default App;