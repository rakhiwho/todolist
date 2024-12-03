import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
   
   
  const [editing, setEditing] = useState(false);
   
  // const search = (title) => {
  //   setTasks(tasks.filter((task) => task.title !== title));
  // };

   
  return (
    <MyContext.Provider
      value={{
        editing,
        setEditing,
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
