import { FormEvent, useState } from "react";
import { EmpetyTask } from "./components/EmpetyTask";
import { CreateTask } from "./components/CreateTask/index.js";
import { Task } from "./components/Task";
import { task_data } from './data/task_data.js';
import { v4 as uuidv4 } from "uuid";
import Logo from "../src/assets/Logo.svg";
import styles from "./App.module.css";

function App() {

  const [createdTasks, setCreatedTasks] = useState(task_data);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTaskText.trim() === "") return;

    const newTask = {
      id: uuidv4(), //Gera um novo id
      title: newTaskText, //Define o texto da nova tarefa
      isComplete: false // Inicializa a tarefa como não concluida
    }

    setCreatedTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText("");
  }

  function toogleComplete(taskId: string, isComplete: boolean) {
    const updateTasks = createdTasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isComplete: isComplete}
      }
      return {...task}
    })
    setCreatedTasks(updateTasks);
  }

  function deleteTask(taskId: string) {
    setCreatedTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logotipo do ToDo" />
      </header>
      <main className={styles.wrapper}>
        <CreateTask
          handleCreateNewTask={handleCreateNewTask}
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
        />
        <section className={styles.taskContainer}>
          <div className={styles.notifications}>
            <div>
              <p>Tarefas criadas</p>
              <span>{createdTasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>
                {createdTasks.filter((task) => task.isComplete).length} de {createdTasks.length}
              </span>
            </div>
          </div>
          {createdTasks.length === 0 ? (
            <EmpetyTask/>
          ) : (
            createdTasks.map((task) =>
              <Task
                key={task.id}
                title={task.title}
                isComplete={task.isComplete}
                id={task.id}
                toogleComplete={toogleComplete}
                onDeleteTask={deleteTask}
              />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default App;
