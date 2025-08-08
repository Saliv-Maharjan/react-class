import axios from "axios";

// export const getAllBlogs = () => {
//   return new Promise((resolve) => {
//     axios.get("http://localhost:4000/blogData").then(function (response) {
//       resolve(response.data);
//     });
//   });
// };

export const getAllBlogs = async () => {
  const response = await axios.get("http://localhost:4000/blogData");
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`http://localhost:4000/blogData/${id}`);
  return response.data;
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/blogData",
      blogData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/blogData/${id}`,
      blogData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/blogData/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
