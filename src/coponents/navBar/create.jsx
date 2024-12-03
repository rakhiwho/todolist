import React, {  useState } from "react";
 
import { MdCancel } from "react-icons/md";
import { useSelector , useDispatch} from "react-redux";
import { create , setCreating} from "../../Hooks/reduxreducer/tasks";
 
function CREATE() {
 
  const Dispatch = useDispatch();
  const creating = useSelector((state)=> state.task.creating)
  const [newList, setNewList] = useState({
    title: "",
    description: "",
    dueDate: "",
    id: Date.now(),
    completed: false,
  });
  const handle = () => {
    if (newList.title === "") {
      alert("list's title cant be blank!");
      return;
    }
   Dispatch(create(newList))
    Dispatch(setCreating( !creating));
  };
  const cancle = () => {
    Dispatch(setCreating(!creating));
  
  };
  return (
    <div>
      <div className="flex flex-col  w-fit bg-white m-3 p-4 BORDER">
        <div className="flex relative  ">
          <input
            className="capitalize text-lg font-medium outline-none "
            value={newList.title}
            onChange={(e) => setNewList({ ...newList, title: e.target.value })}
            placeholder="title"
          />
          <button
            onClick={handle}
            className="border-green-800 absolute right-2 hover:bg-green-800 hover:text-white border-[2px] font-medium  rounded-xl px-2 text-green-800"
          >
            save
          </button>
        </div>

        <div className="h-[2px] my-2  w-full bg-slate-400"></div>
        <div className="py-2 text-lg w-[33vw] flex flex-wrap">
          <textarea
            className="  text-md font-sm outline-none w-full"
            value={newList.description}
            onChange={(e) =>
              setNewList({ ...newList, description: e.target.value })
            }
            placeholder="description"
          />
        </div>
        <div>
<h2 className="text-xs ">
          due :{" "}
          <input
            type="date"
            className="text-xs outline-none"
            value={newList.dueDate}
            onChange={(e) =>
              setNewList({ ...newList, dueDate: e.target.value })
            }
            placeholder="due date"
          />
        </h2>
         <button onClick={cancle}  className="text-red-800  absolute left-[85%] bottom-[12%]">
         <MdCancel className="size-5" />
         </button>
        </div>
        
      </div>
    </div>
  );
}

export default CREATE;
