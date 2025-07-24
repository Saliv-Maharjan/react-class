import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const CreateBlog = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    console.log(data);
    navigate("/admin/blog");
  };

  const [data, setData] = useState({
    title: "",
    desc: "",
    author: localStorage.getItem("USER_EMAIL"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="create-section">
      <div className="create-box">
        <h2>Add Blog</h2>
        <div>
          <div className="box-lables">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter bolg title"
              name="title"
              onChange={handleChange}
              value={data.title}
            />
          </div>
          <div className="box-lables">
            <label>Description</label>
            <textarea
              placeholder="Blog description"
              name="desc"
              onChange={handleChange}
              value={data.desc}
            />
          </div>
          <div className="box-lables">
            <button onClick={() => buttonClick()}>Upload</button>
          </div>
        </div>
      </div>
      <NavLink to="/admin/blog">Back</NavLink>
    </div>
  );
};

export default CreateBlog;
