"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "@/lib/features/userSlice";

export default function UserList({ users }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (user) => {
    dispatch(setSelectedUser(user));
    router.push("/dashboard");
  };

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => handleClick(user)}
          style={{ cursor: "pointer" }}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
