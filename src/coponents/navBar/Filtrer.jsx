import * as React from "react";
import {setFilter} from "../../Hooks/reduxreducer/tasks"
import { useDispatch } from "react-redux";

export default function Filter() {
 const Dispatch =  useDispatch();
  return (
    <>
      <ul className="bg-white w-fit pl-10 p-3 list-disc text-lg capitalize">
        <li onClick={()=>Dispatch(setFilter("all tasks"))} className="hover:text-white p-1 rounded-md hover:bg-slate-600">
          all tasks
        </li>
        <div className="h-[2px] my-2  w-full bg-slate-400"></div>
        <li onClick={()=>Dispatch(setFilter( "completed"))} className="hover:text-white p-1 rounded-md hover:bg-slate-600"> pending</li>
        <div className="h-[2px] my-2  w-full bg-slate-400"></div>
        <li onClick={()=>Dispatch(setFilter("pending"))} className="hover:text-white p-1 rounded-md hover:bg-slate-600">completed</li>
        <div className="h-[2px] my-2  w-full bg-slate-400"></div>

        <li onClick={()=>Dispatch(setFilter("overdue"))} className="hover:text-white p-1 rounded-md hover:bg-slate-600">overdue</li>
      </ul>
    </>
  );
}
