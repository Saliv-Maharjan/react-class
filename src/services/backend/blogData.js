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
