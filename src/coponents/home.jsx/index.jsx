import React from "react";
import Tasks from "../tasks";

import CREATE from "../navBar/create";
import { useDispatch, useSelector } from "react-redux";
import MyProvider from "../tasks/Context";
import { setFilterVal } from "../../Hooks/reduxreducer/tasks";

function Home() {
  const tasklist = useSelector((state) => state.task.filterVal);
  const creating = useSelector((state) => state.task.creating);
  const filter = useSelector((state)=>state.task.filter)
  const data = useSelector((state)=>state.task.value)
  const Dispatch = useDispatch();
  React.useEffect(()=>{
   Dispatch(setFilterVal())
  } , [filter ,data ])
  return (
    <>
      <div
        className={` flex flex-col  sm:flex-row flex-wrap  justify-evenly pt-[10vh] ${
          creating ? "blur-lg" : ""
        } `}
      >
        {tasklist.map((task, index) => (
          <MyProvider>

            <Tasks key={index} task={task} />
          </MyProvider>
        ))}
      </div>
      {creating && (
        <div className="fixed left-[30%] top-[40%]">
          {" "}
          <CREATE />{" "}
        </div>
      )}
    </>
  );
}

export default Home;
