import { v4 as uuidv4 } from "uuid";

export const task_data: {id: string, title: string, isComplete: boolean}[] = [
  {
    id: uuidv4(),
    title: 'Fazer compras',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Lavar o carro',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Estudar React',
    isComplete: false
  }
];