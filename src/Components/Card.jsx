import React from "react";
function Card({ user, handleRemoveButton, id }) {
  return (
    <div className="w-40 h-full  flex flex-col p-2 items-center rounded-lg">
      <div className="image w-10 h-10 bg-blue-400 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h1 className="text-xl font-semibold mt-1">{user.name}</h1>
      <h4 className="text-center text-xs font-semibold opacity-60">
        {user.email}
      </h4>
      <p className="text-center text-xs font-semibold mt-1 leading- traking-tight">
        This is your profile you can See and by clicking on Remove It Button It should remove {" "}
      </p>
      <button
        onClick={() => handleRemoveButton(id)}
        className="rounded-lg bg-red-600 text-white mt-2 px-3 font-semibold text-xs py-1"
      >
        Remove It!
      </button>
    </div>
  );
}
export default Card;
