import { Trash } from '@phosphor-icons/react/dist/ssr';
import style from './Task.module.css';

interface TaskProps {
  title: string;
  isComplete: boolean;
  id: string;
  toogleComplete: (TaskId: string, isComplete: boolean) => void;
  onDeleteTask: (TaskId: string) => void;
}

export function Task({ title, isComplete, toogleComplete, onDeleteTask, id }: TaskProps) {
  
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTaskToogle() {
    toogleComplete(id, !isComplete);
  }

  return (
    <div className={style.taskContainer}>
      <div className={style.checkbox_wrapper}>
        <input
          id="taskCheckbox"
          type="checkbox"
          checked={isComplete}
          onChange={handleTaskToogle}
        />
        <p className={style.paragraph}>{title}</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}