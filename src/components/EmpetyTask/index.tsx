import Clipboard from '../../assets/Clipboard.svg';
import styles from './EmpetyTask.module.css';

export function EmpetyTask() {
  return (
    <div className={styles.containerTaskEmpety}>
      <img src={Clipboard} alt="Clipboard" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
