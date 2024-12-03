import React, { useContext, useState } from "react";
import { DELETE, edit } from "../../Hooks/reduxreducer/tasks";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import MyProvider, { MyContext } from "./Context";
import EDITING from "./EDITING";
import { useDispatch } from "react-redux";
import "./style.css";
function Tasks({ task }) {
  const [iscompleted, setIscompleted] = useState(task.completed);
  const { editing, setEditing } = useContext(MyContext);
  const Dispatch = useDispatch();

  const handleEDIT = (id, iscompleted) => {
    setIscompleted(!iscompleted);
    Dispatch(edit({ id: id, field: "completed", value: iscompleted }));
  };

  return (
    <>

      {editing && (
        <div className="relative">
          <EDITING task={task} />
        </div>
      )}
      {!editing && (
        <div className={`  flex flex-col bg-white m-3 p-4 BORDER`}>
          <div className="flex relative ">
            <h4 className="capitalize text-lg font-medium ">{task.title}</h4>
            <button
              onClick={() => handleEDIT(task.title, iscompleted)}
              className={` ${
                iscompleted ? "bg-green-700 text-white" : ""
              } rounded-full border-[1px] hover:bg-green-700 hover:text-white absolute right-2 self-stretch text-green-700 `}
            >
              <MdFileDownloadDone className="size-5" />
            </button>
          </div>

          <div className="h-[2px] my-2  w-full bg-slate-400"></div>
          <div className="py-2 text-lg w-[30vw] flex flex-wrap">
            {task.description}
          </div>
          <h2 className="text-xs">due : {task.dueDate}</h2>
          <div className="flex  mt-2">
            <button
              onClick={() => Dispatch(DELETE({ id: task.id }))}
              className="mx-3 text-red-950"
            >
              <MdDelete />
            </button>
            <button
              onClick={() =>setEditing(!editing)}
              className="text-red-950"
            >
              <FaEdit />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Tasks;
