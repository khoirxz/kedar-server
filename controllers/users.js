import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Users from "../model/user.js";

// Auth
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.status(201).send(users);
  } catch (error) {
    console.log(error);
  }
};

// Auth
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findAll({
      where: { id },
    });

    return !user.length
      ? res.status(409).json({ message: "data not valid" })
      : res.status(201).send(user[0]);
  } catch (error) {
    console.log(error);
  }
};

// Auth
export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    await Users.update(req.body, {
      where: {
        id,
      },
    });

    res.status(201).json({ message: "data updated" });
  } catch (error) {
    console.log(error);
  }
};

//SignUp Route
export const createUser = async (req, res) => {
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passwordHashed = bcrypt.hashSync(password, salt);

  try {
    await Users.create({
      ...req.body,
      password: passwordHashed,
      created_at: new Date().toISOString(),
    });

    const {password, confirmPassword, ...result} = req.body

    return res.status(200).json({
      message: "User Created",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//Login Route
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const accessTokenSecret = "kedarsukses";

  const user = await Users.findOne({ where: { email } });

  try {
    if (!user) {
      return res.status(409).json({ message: "username not found" });
    } else {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        const token = jwt.sign(
          { id: user.id, role: user.role },
          accessTokenSecret
        );
        return res.status(200).json({ message: "login sukses", token });
      } else {
        return res.status(409).json({ message: "check username or password" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
