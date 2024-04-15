import React from "react";
import Card from "./Card";
function Cards({ users, handleRemoveButton }) {
  return (
    <div className="w-full  p-4 h-60 max-h-96 overflow-auto flex justify-center gap-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <Card
            key={index}
            user={item}
            id={index}
            handleRemoveButton={handleRemoveButton}
          />
        );
      })}
    </div>
  );
}
export default Cards;
