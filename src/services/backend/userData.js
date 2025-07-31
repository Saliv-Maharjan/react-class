export const getAllUsers = () => {
  const userData = [
    {
      id: 1,
      firstName: "Saliv",
      lastName: "Maharjan",
      contactNum: "9866445340",
      emailAddress: "salivmrj@gmail.com",
      homeAddress: "Kirtipur, Panga-8",
    },
    {
      id: 2,
      firstName: "Pranish",
      lastName: "Khadge",
      contactNum: "9866445341",
      emailAddress: "pigge@gmail.com",
      homeAddress: "Lalitpur, Lagankhel",
    },
    {
      id: 3,
      firstName: "Raman",
      lastName: "Kayastha",
      contactNum: "9866445342",
      emailAddress: "raman@gmail.com",
      homeAddress: "Bhaktapur, Thimi",
    },
    {
      id: 4,
      firstName: "Sujal",
      lastName: "Shakya",
      contactNum: "9866445344",
      emailAddress: "sujal@gmail.com",
      homeAddress: "Bhaktapur, Thimi",
    },
  ];
  return userData;
};

export const getUserById = (id) => {
  const users = getAllUsers();
  const user = users.find((x) => x.id === parseInt(id));
  return user;
};
