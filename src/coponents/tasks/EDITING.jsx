import React, { useContext, useState } from "react";
import { MyContext } from "./Context";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../Hooks/reduxreducer/tasks";
function EDITING({ task }) {
  const { editing , setEditing}  =  useContext(MyContext)
  const Dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [due, setDue] = useState(task.dueDate);

  const handleInputChange = () => {
    console.log(description)
    Dispatch(edit({id : task.id , field  : "title" , value :title}))
    Dispatch(edit({id : task.id , field  : "description" , value :description}))
    Dispatch(edit({id : task.id , field  : "dueDate" , value :due}))
   
     setEditing(!editing);
  };
  return (
    <div className="flex flex-col bg-white m-3 p-4 BORDER">
      <div key={task.id} className=" ">
        <div className="mb-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="capitalize text-lg font-medium outline-none "
          />
          <button
            onClick={handleInputChange}
            className=" absolute z-[99] top-7 right-8  border-green-800   hover:bg-green-800 hover:text-white border-[2px] font-medium  rounded-xl px-2 text-green-800"
          >
            save
          </button>
        </div>
        <div className="h-[2px] my-2  w-full bg-slate-400"></div>
        <div className="mb-2">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" outline-none py-2 text-lg w-[30vw] flex flex-wrap "
          />
        </div>
        <div className="mb-2">
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className=" text-xs outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default EDITING;
