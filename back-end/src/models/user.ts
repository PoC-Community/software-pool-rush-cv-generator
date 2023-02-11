import { User } from "@prisma/client";
import { randomUUID } from "crypto";
import client from '../client';

type userPostRequest = {
    uuid: string;
    email: string;
    password:string;
  }

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