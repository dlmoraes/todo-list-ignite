import styles from './Header.module.css'

import todoLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Logo da aplicação' />
      <span>
        todo
      </span>
    </header>
  )
}