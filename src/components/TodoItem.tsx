import { Trash } from "@phosphor-icons/react";
import { TodoType } from "./Todo";
import styles from "./TodoItem.module.css";

interface TodoProps {
  todo: TodoType;
  onChangeStatusTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export function TodoItem({
  todo,
  onChangeStatusTodo,
  onRemoveTodo,
}: TodoProps) {
  function handleChangeStatus() {
    onChangeStatusTodo(todo.id);
  }

  function handleRemoveItem() {
    onRemoveTodo(todo.id);
  }

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        name="completed"
        className={styles.checkBoxTodo}
        onChange={handleChangeStatus}
      />
      <div className={styles.contentTodo}>{todo.content}</div>
      <Trash size={24} onClick={handleRemoveItem} />
    </div>
  );
}
