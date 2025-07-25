export const getAllBlogs = () => {
  const data = [
    {
      id: 1,
      title: "Blog 1",
      author: "Saliv",
      desc: "This is the description for the Blog Post 1.",
      createdDate: "2025-07-25",
    },
    {
      id: 2,
      title: "Blog 2",
      author: "Saliv",
      desc: "This is the description for the Blog Post 2.",
      createdDate: "2025-07-25",
    },
    {
      id: 3,
      title: "Blog 3",
      author: "Saliv",
      desc: "This is the description for the Blog Post 3.",
      createdDate: "2025-07-25",
    },
  ];
  return data;
};

export const getBlogById = (id) => {
  const blogs = getAllBlogs();
  const blog = blogs.find((x) => x.id === parseInt(id));
  return blog;
};
