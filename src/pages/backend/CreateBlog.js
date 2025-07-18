import { NavLink, useNavigate } from "react-router";

const CreateBlog = () => {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate("/admin/blog");
  };

  return (
    <div className="create-section">
      <div className="create-box">
        <h2>Add Blog</h2>
        <div>
          <div className="box-lables">
            <label>Title</label>
            <input type="text" placeholder="Enter bolg title" />
          </div>
          <div className="box-lables">
            <label>Description</label>
            <textarea placeholder="Blog description" />
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
