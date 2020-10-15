import { hash } from 'bcryptjs';

import User, { UserDocument } from '../schemas/User';
import AppError from '../errors/AppError';

interface Request {
  username: string;
  email: string;
  password: string;
  hasAdmin: boolean;
}

class CreateUserService {
  public async execute({
    username,
    email,
    password,
    hasAdmin,
  }: Request): Promise<UserDocument> {
    const checkUsername = await User.findOne({
      where: { username },
    });

    if (checkUsername) {
      throw new AppError('Username already taken');
    }

    const checkEmail = await User.findOne({
      where: { email },
    });

    if (checkEmail) {
      throw new AppError('Email already taken');
    }

    const hashedPassword = await hash(password, 8);

    const user = User.create({
      username,
      email,
      password: hashedPassword,
      hasAdmin,
    });

    return user;
  }
}

export default CreateUserService;
