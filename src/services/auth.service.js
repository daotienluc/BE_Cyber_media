import { BadRequestException } from "../common/helpers/error.helper.js";
import { prisma } from "../common/prisma/init.prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authService = {
  // api
  register: async (req) => {
    // bước 1: nhận dữ liệu: full_name, email, password
    const { full_name, email, pass_word } = req.body;

    // bước 2: lấy email kiểm tra trong db xem có đăng ký tài khoản chưa
    // findFirst: tìm đầu tiên
    const userExists = await prisma.users.findFirst({
      where: { email: email },
    });

    if (userExists) {
      throw new BadRequestException("Tài khoản đã tồn tại!");
    }

    // Mã hóa password
    const passwordHash = bcrypt.hashSync(pass_word, 10);

    // bước 3: tạo người dùng mới
    const userNew = await prisma.users.create({
      data: {
        full_name: full_name,
        email: email,
        pass_word: passwordHash,
      },
    });

    // Xóa password khi trả về
    delete userNew.pass_word;

    // bước 4: trả kqua thành công
    return userNew;
  },
  login: async (req) => {
    const { email, pass_word } = req.body;

    const userExists = await prisma.users.findFirst({
      where: { email: email },
    });

    if (!userExists) {
      throw new BadRequestException("Tài khoản chưa tồn tại, vui lòng đăng ký");
    }

    // so sánh password
    const isPassword = bcrypt.compareSync(pass_word, userExists.pass_word);

    if (!isPassword) {
      throw new BadRequestException("Mật khẩu không đúng, vui lòng thử lại");
    }

    const accessToken = authService.createToken(userExists.user_id);

    return {
      accessToken: accessToken,
      refreshToken: "123",
    };
  },

  // func
  createToken: (userId) => {
    if (!userId) {
      throw new BadRequestException("Không có userId để tạo token");
    }
    const accessToken = jwt.sign({ userId: userId }, "ACCESS_TOKEN_SECRET", {
      expiresIn: "1d",
    });
    return accessToken;
  },
};

export default authService;
