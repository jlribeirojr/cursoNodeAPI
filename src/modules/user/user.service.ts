import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { UserInsertDTO } from 'src/user/dtos/user-isert.dto';
const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
  return prisma.user.findMany();
};
export const creatUser = async (body: UserInsertDTO): Promise<UserModel> => {
  return prisma.user.create({
    data: body,
  });
};
