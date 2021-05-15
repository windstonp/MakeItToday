export async function index(){
  const response = await fetch('http://192.168.25.108:3333/');
  const data = await response.json();
  return data;
}
export async function DeleteTask(uuid: string){
  const body = {"uuid": uuid};
  const response = await fetch('http://192.168.25.108:3333/delete',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(body)
  });
  await response.json();
}
export async function store(text: string){
  const body = {"title": text};
  const response = await fetch('http://192.168.25.108:3333/store',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  });
  return await response.json();
}