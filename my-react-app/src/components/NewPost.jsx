import { useState } from "react";
import classes from "./NewPost.module.css";
import { useNavigate ,useOutletContext} from "react-router";
function NewPost() {
  const { onAdd }=useOutletContext()
let navigate=useNavigate()
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onAdd(name, text);
      navigate("/posts")
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label>Author Name</label>
        <input type="text" required onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <label>Content</label>
        <textarea required rows={3} onChange={(e) => setText(e.target.value)} />
      </p>
      <p className={classes.actions}>
        <button type="submit" className="btn-add">Create Post</button>
        <button type="button" className="btn-cancel" onClick={()=> navigate("/posts")}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;