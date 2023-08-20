import { UserModel } from '@modules/user/user.model';
import { sign } from 'jsonwebtoken';
export const PASSWORD_JWT = 'umasenhamuitolouca';
export const generateToken = (user: UserModel): string => {
  return sign(
    {
      userId: user.id,
      email: user.email,
      typeUser: user.typeUser,
    },
    PASSWORD_JWT,
    {
      subject: String(user.id),
      expiresIn: '60480000',
    },
  );
};
