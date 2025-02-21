import { PlusCircle } from "@phosphor-icons/react";
import style from "./CreateTask.module.css";

interface FormProps {
  handleCreateNewTask: (event: React.FormEvent<HTMLFormElement>) =>  void;
  newTaskText: string;
  setNewTaskText: (text: string) =>  void;
}

export function CreateTask({handleCreateNewTask, newTaskText, setNewTaskText}: FormProps) {
  return (
    <form onSubmit={handleCreateNewTask} className={style.formContainer}>
      <input
        placeholder="Adicione uma nova tarefa..."
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={26} />
      </button>
    </form>
  );
}
