import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
 import Filter from './Filtrer';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCreating , setFiltering , search } from '../../Hooks/reduxreducer/tasks'; 

function NavBar() {
  const filtering = useSelector((state)=> state.task.filtering)
    const creating = useSelector((state)=> state.task.creating)
    const Dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    Dispatch(search(searchTerm));
  };
    return (
      <>
       <div className='fixed z-[100] flex bg-red-700 text-white w-[100vw]  justify-between h-[8vh] mt-0 py-4 shadow-lg '>
     <div className=' text-white px-4 mr-5 w-[30vw] sm:w-[40vw]  font-medium '>TODOLIST</div>
     <div className='flex justify-between w-[70vw] lg:w-[36vw] sm:w-[60vw]'>
     <div  className='flex  bg-white h-fit w-fit p-1 rounded-lg '>
       <div><input onChange={handleSearch} type="text" className=' w-[33vw] sm:w-[33vh] text-black outline-none  rounded-lg p-1 active:border-none border-r-red-950 ' placeholder='seach...'  /></div> 
       <div><IoSearch className="size-6 mt-1 text-slate-700 bg-white" />
       </div>
     </div>
     <div  className='w-[30vw] lg:w-[14vw] flex justify-evenly '>
     <Button onClick={()=> Dispatch(setFiltering(!filtering))} variant="contained" size="small" color="error">
  filter
</Button>
<Button onClick={()=>Dispatch(setCreating(!creating))} size='small' variant="contained" color="error">
  create
</Button>
     </div>
     </div>
    
       </div>
      {filtering &&  <div className='absolute top-[8vh] right-[10%] z-[99] overflow-hidden  '>
        <Filter />
        </div>}
      </>
  )
}

export default NavBar
