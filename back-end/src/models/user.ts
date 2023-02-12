import { User } from "@prisma/client";
import { randomUUID } from "crypto";
import client from '../client';

export const createUser = async (data: Omit<User, "uuid">): Promise<User> => {
  return await client.user.create({data: {uuid: randomUUID(), ...data}});
}

export const getUser = async (uuid: string) => {
  return await client.user.findUnique({
      where: {
        uuid
      },
  });
}

export const getUserFromEmail = async (email: string) => {
  return await client.user.findFirst({
      where: {
        email
      },
  });
}