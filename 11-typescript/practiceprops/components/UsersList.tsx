import React from "react";
import UserCard from "./UserCard";
import { UserProps } from "@/lib/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Data not found");
  }

  return res.json();
}

const UserList = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5">
      {data.map((user: UserProps) => (
        <UserCard key={user.id} name={user.name} website={user.website} />
      ))}
    </div>
  );
};

export default UserList;
