import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { UserInsertDTO } from 'src/user/dtos/user-isert.dto';
import { NotFoundException } from '@exceptions/not-found-exception';
import { BadRequestException } from '@exceptions/bad-request-exception';
const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany();
  if (users?.length === 0) {
    throw new NotFoundException('User');
  }
  return users;
};

export const getUserByEmail = async (email: string): Promise<UserModel> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new NotFoundException('User');
  }
  return user;
};

export const getUserByCpf = async (cpf: string): Promise<UserModel> => {
  const user = await prisma.user.findFirst({
    where: {
      cpf,
    },
  });
  if (!user) {
    throw new NotFoundException('User');
  }

  return user;
};

export const creatUser = async (body: UserInsertDTO): Promise<UserModel> => {
  const userEmail = await getUserByEmail(body.email).catch(() => undefined);
  if (userEmail) {
    throw new BadRequestException('Email already exist in DB');
  }
  const userCpf = await getUserByCpf(body.cpf).catch(() => undefined);

  if (userCpf) {
    throw new BadRequestException('CPF already exist in DB');
  }

  return prisma.user.create({
    data: body,
  });
};
