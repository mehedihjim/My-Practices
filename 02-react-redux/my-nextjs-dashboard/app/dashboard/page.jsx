"use client";

import { useSelector } from "react-redux";
import TaskList from "@/components/TaskList";

export default function Dashboard() {
  const user = useSelector((state) => state.user.selectedUser);

  if (!user) {
    return <div>No user selected. Go back to home.</div>;
  }

  return (
    <div>
      <h1>Dashboard for {user.name}</h1>
      <TaskList userId={user.id} />
    </div>
  );
}
