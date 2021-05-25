import Users from "../model/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.status(201).send(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findAll({
      where: { id },
    });

    res.status(201).send(user[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    await Users.create(req.body);

    res.status(201).json({
      message: "User Created",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
  }
};
