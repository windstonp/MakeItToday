import {Router} from 'express';
import { TaskController } from './controllers/TaskController';

const routes = Router();

const taskController = new TaskController();

routes.get('/', taskController.Index);

routes.post('/store', taskController.Store);

routes.delete('/delete', taskController.Delete);

routes.put('/update/:uuid', taskController.Update);

export {routes}