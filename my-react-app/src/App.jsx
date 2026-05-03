import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Home from "./components/Home";
import PostList from "./components/PostList";
import Post from "./components/Post";
import NewPost from "./components/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":postId" element={<Post />} />
          <Route path="new" element={<NewPost />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;