import { v4 as uuidv4 } from "uuid";

import { TodoType } from "../components/Todo";

export const todoFake: TodoType[] = [
  { id: uuidv4(), content: "Lave a louça" },
  { id: uuidv4(), content: "Passe o aspirador de pó" },
  { id: uuidv4(), content: "Faça a cama" },
  { id: uuidv4(), content: "Leve o cachorro para passear" },
  { id: uuidv4(), content: "Regue as plantas" },
];
