import { Cv } from "@prisma/client";
import { randomUUID } from "crypto";
import { z } from "zod";
import client from '../client';
import { informationObject } from "../schema/cv";

type CvPostRequest = {
  templateName: string;
  uuidUser: string;
  information: z.infer<typeof informationObject>;
}

export const createCv = async (data: CvPostRequest): Promise<Cv> => {
  return await client.cv.create({data: {uuid: randomUUID(), templateName: data.templateName, information: data.information, user: {connect: {uuid: data.uuidUser}} }});
}

export const getCv = async (uuid: string) => {
  return await client.cv.findUnique({
      where: {
        uuid
      },
  });
}

export const deleteCv = async (uuid: string) => {
  return await client.cv.delete({
      where: {
        uuid
      },
  });
}

export const getCvs = async (uuidUser: string) => {
  return await client.cv.findMany({
    where: {
      uuidUser
    },
  });
}