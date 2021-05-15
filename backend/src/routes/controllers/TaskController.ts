import { Request, Response } from "express";
import { TaskServices } from "../../Services/TaskServices";
import { Task } from "../../typescript/interface";
import { v4 as uuidv4 } from 'uuid';

class TaskController{

  async Index(req: Request, res: Response){
    try{
      const taskService = new TaskServices();
      const response = await taskService.Index();
      return res.json(response);
    }catch(e){
      return res.status(400).json({'error': e.message});
    }
  }

  async Store(req: Request, res: Response){
    const {title, message} = req.body;
    const uuid = uuidv4();
    try{
      const taskService = new TaskServices();
      const response = await taskService.Store({uuid, title, message});
      return res.json(response);
    }catch(e){
      return res.status(400).json({'error': e.message});
    }
  }

  async Delete(req: Request, res: Response){
    const { uuid } = req.body;
    try{
      const taskService = new TaskServices();
      const response = await taskService.Delete(uuid as string);
      return res.status(200).json(response);
    }catch{
      return res.status(400).json({
        "message": "oops, something is wrong with your request!"
      })
    }
  }

  async Update(req: Request, res: Response){
    const { uuid } = req.params;
    const { title, message } = req.body;

    try{
      const taskService = new TaskServices();
      const response = await taskService.Update({uuid, title, message} as Task);
      return res.status(200).json(response);
    }catch(e){
      return res.status(400).json({'error': e.message});
    }
  }
}

export {TaskController}