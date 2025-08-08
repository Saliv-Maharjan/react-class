import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { getBlogById, updateBlog } from "../../services/backend/blogData";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const buttonClick = () => {
    console.log(data);
    navigate("/admin/blog");
  };

  const [data, setData] = useState({
    title: "",
    desc: "",
    author: localStorage.getItem("USER_EMAIL"),
  });

  const [errors, setErrors] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (id) {
      getBlogById(id).then((response) => {
        setData({ ...data, title: response.title, desc: response.desc });
      });
    }
  }, []);

  const handleSubmit = () => {
    let hasError = false;
    let validationErrors = {
      title: "",
      desc: "",
    };

    if (data.title.trim() === "") {
      validationErrors.title = "Title is Required";
      hasError = true;
    }

    if (data.desc.trim() === "") {
      validationErrors.desc = "Description os Required";
      hasError = true;
    }

    setErrors(validationErrors);

    if (!hasError) {
      // Form is Valid
      updateBlog(id, data)
        .then((response) => {
          navigate("/admin/blog");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Has Error");
    }
  };

  return (
    <div className="create-section">
      <div className="create-box">
        <h2>Edit Blog</h2>
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
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div className="box-lables">
            <label>Description</label>
            <textarea
              placeholder="Blog description"
              name="desc"
              onChange={handleChange}
              value={data.desc}
            />
            {errors.desc && <p className="error">{errors.desc}</p>}
          </div>
          <div className="box-lables">
            <button onClick={handleSubmit}>Edit</button>
          </div>
        </div>
      </div>
      <NavLink to="/admin/blog">Back</NavLink>
    </div>
  );
};

export default EditBlog;
