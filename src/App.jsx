import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  const handleRemoveButton = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  return (
    <div className="w-full h-screen  flex items-center justify-center  ">
      <div className="container  mx-auto ">
        <Cards users={users} handleRemoveButton={handleRemoveButton} />

        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}
export default App;
