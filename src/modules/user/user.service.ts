import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { UserInsertDTO } from 'src/user/dtos/user-isert.dto';
import { NotFoundException } from '@exceptions/not-found-exception';
const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany();
  if (users?.length === 0) {
    throw new NotFoundException('User');
  }
  return users;
};
export const creatUser = async (body: UserInsertDTO): Promise<UserModel> => {
  return prisma.user.create({
    data: body,
  });
};
