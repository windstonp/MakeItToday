import { TaskRepository } from "../repositories/TaskRepository";
import { Task } from "../typescript/interface";
import { TaskValidator } from "../Validators/TaskValidator";

class TaskServices{
  private taskValidator;
  private taskRepository;
  constructor(){
    this.taskValidator = new TaskValidator();
    this.taskRepository = new TaskRepository();
  }

  async Index(){
    try{
      const items = await this.taskRepository.getAll();
      return items;
    }catch{
      throw new Error("oops, something is wrong with your request");
    }
  }

  async Store({uuid, title, message}: Task){

    const validation = await this.taskValidator.Validate({uuid, title, message});
    if(validation){
      try{
        const items = await this.taskRepository.Store({uuid, title, message});
        return items;
      }catch{
        throw new Error("oops, something is wrong with your request");
      }
    }

    throw new Error("oops, something is wrong with your request");
    
  }

  async Delete(uuid: string){
    if(uuid){
      try{
        const items = await this.taskRepository.Delete(uuid);
        return items;
      }catch(e){
        throw new Error("oops, something is wrong with your request");
      }
    }
    throw new Error("oops, something is wrong with your request");
  }

  async Update({uuid, title, message}: Task){
    
    const validation = await this.taskValidator.Validate({uuid, title, message});

    if(validation){
      try{
        const items = await this.taskRepository.Update({uuid, title, message});
        return items;
      }catch(e){
        throw new Error("oops, something is wrong with your request");
      }
    }

    throw new Error("oops, something is wrong with your request");
    
  }
}

export {TaskServices};