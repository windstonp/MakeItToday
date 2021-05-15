import { Task } from "../typescript/interface";

export class TaskValidator{
  async Validate({uuid, title}: Task){
    if(uuid && title){
      return true;
    }
    return false;
  }
}