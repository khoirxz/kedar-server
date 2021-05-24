import Users from "../model/user.js";

export const getAll = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.send(users);
  } catch (error) {
    console.log(error);
  }
};
