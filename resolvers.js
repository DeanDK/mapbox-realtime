const user = {
  _id: "1",
  name: "Dean",
  email: "deanbozic@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
