import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { todoFake } from "../data/fake";
import { EmptyTodo } from "./EmptyTodo";
import styles from "./Todo.module.css";
import { TodoItem } from "./TodoItem";

export interface TodoType {
  id: string;
  content: string;
  completed?: boolean;
}

export function Todo() {
  const [todos, setTodos] = useState<TodoType[]>(todoFake);
  const [contentNewTodo, setContentNewTodo] = useState("");

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    const id = uuidv4();
    const newTodoItem: TodoType = {
      id,
      content: contentNewTodo,
      completed: false,
    };

    setTodos((state) => [...state, newTodoItem]);
    setContentNewTodo("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setContentNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleChangeStatusTodo(id: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function handleRemoveTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }

  const totalTodo = todos.length;
  const isContentNewTodoEmpty = contentNewTodo.length === 0;
  const totalCompletedTodo = todos.filter((todo) => todo.completed).length;

  return (
    <main>
      <form onSubmit={handleNewTodo} className={styles.todoForm}>
        <input
          type="text"
          name="content"
          placeholder="Adicione uma nova tarefa"
          value={contentNewTodo}
          onChange={handleNewTodoChange}
          onInvalid={handleNewTodoInvalid}
          required
        />

        <button type="submit" disabled={isContentNewTodoEmpty}>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.resumeTodo}>
        <div>
          Tarefas criadas
          <span>{totalTodo}</span>
        </div>
        <div>
          Concluídas
          <span>
            {totalTodo
              ? `${totalCompletedTodo} de ${totalTodo}`
              : totalCompletedTodo}
          </span>
        </div>
      </div>

      {totalTodo ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChangeStatusTodo={handleChangeStatusTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        ))
      ) : (
        <EmptyTodo />
      )}
    </main>
  );
}
