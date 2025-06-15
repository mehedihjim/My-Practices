"use client";

import { useEffect, useState } from "react";

export default function TaskList({ userId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );
      const data = await res.json();
      setTasks(data);
    }

    fetchTasks();
  }, [userId]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
