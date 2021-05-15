export interface TaskInterface{
  uuid: string,
  title: string,
  message?: string
}
export interface TaskProps{
  Task: TaskInterface,
  handleDelete: (uuid: string) => void,
}