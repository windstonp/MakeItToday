import { Task } from "../typescript/interface";

export class TaskValidator{
  async Validate({uuid, title, message}: Task){
    if(uuid && title && message){
      return true;
    }
    return false;
  }
}