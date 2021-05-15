import {PrismaClient} from '@prisma/client';
import { Task } from "../typescript/interface";

const client = new PrismaClient();
class TaskRepository{
  async getAll(){
    try{
      const items = await client.task.findMany();
      return items;
    }catch(e){
      throw new Error(e);
    }
  }

  async Store({uuid, title, message}: Task){
    try{
      const items = await client.task.create({
        data: {
          uuid,
          title,
          message
        }
      });
      return items;
    }catch(e){
      throw new Error(e);
    }
  }

  async Delete(uuid: string){
    try{
      const task = await client.task.delete(
        {
          where: {"uuid": uuid},
          select:{
            title:true,
            message: true
          },
        },
      )
      return task;
    }catch(e){
      throw new Error(e);
    }
  }

  async Update({uuid, title, message}: Task){
    try{
      const items = await client.task.update({
        where: {"uuid": uuid},
        data: {
          title,
          message
        }
      });
      return items;
    }catch(e){
      throw new Error(e);
    }
  }
}

export {TaskRepository}