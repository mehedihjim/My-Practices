import React from "react";

const UserCard = (props: { name: string; website: string }) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.website}</p>
    </div>
  );
};

export default UserCard;
