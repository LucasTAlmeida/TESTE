
import { sign } from "jsonwebtoken";
import User from "../schema/Users";
import { compare } from "bcryptjs";

class SessionController {
  async create(request, response) {
    const { username, password } = request.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return response.status(404).json({ error: "User not found!" });
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
      return response
        .status(404)
        .json({ error: "Incorrect password ou username!" });
    }

    const token = sign({}, "21232f297a57a5a743894a0e4a801fc3", {
      subject: new String(user._id),
      expiresIn: "1d",
    });

    return response.json({
      token,
      user,
    });
  }
}

export default new SessionController();