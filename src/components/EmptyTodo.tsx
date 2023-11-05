import ClipBoard from "../assets/Clipboard.png";
import styles from './EmptyTodo.module.css';

export function EmptyTodo() {
  return (
    <div className={styles.emptyTodo}>
      <img src={ClipBoard} />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
