import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { UserInsertDTO } from 'src/user/dtos/user-isert.dto';
import { NotFoundException } from '@exceptions/not-found-exception';
const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany();
  return prisma.user.findMany();
};
export const creatUser = async (body: UserInsertDTO): Promise<UserModel> => {
  return prisma.user.create({
    data: body,
  });
};
