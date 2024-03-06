import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const users = [
  {
    name: 'Luffy',
    phone: 9901234567,
    email: 'luffy@mailinator.com',
    walletAddress: '0x17469fF5Bdc86a5FCeb4604534fF2a47a821d421',
  },
  {
    name: 'Zoro',
    phone: 9923456789,
    email: 'zoro@mailinator.com',
    walletAddress: '0x491A0ae888449A9cE02f3F4288EFD9D5065c16C9',
  },
  {
    name: 'Sanji',
    phone: 9945678901,
    email: 'sanji@mailinator.com',
    walletAddress: '0x2D205EB00883a2FeeBFdAf632f407492F391063c',
  },
];

const createUser = async (user: any) => {
  await prisma.user.create({ data: { ...user } });
};

const main = async () => {
  try {
    await Promise.all(users.map(createUser));
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};

main();
