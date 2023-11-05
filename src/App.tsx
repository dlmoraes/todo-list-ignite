import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Todo />
      </main>
    </div>
  );
}

export default App;
