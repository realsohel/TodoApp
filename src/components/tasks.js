import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '..';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Loarder from './loarder';
import TaskItems from './taskItems';
import { Navigate } from 'react-router-dom';


const Tasks = () => {

    const[title, setTitle] = useState("");
    const[description, setDesc] = useState("");
    const[tasks, setTasks] = useState([]);
    const[refresh, setRefresh] = useState(false);
    
    const {isauthenticated,isLoading, setIsLoading} = useContext(Context)

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        setIsLoading(true)

        try {
            const {data} = await axios.post(`${server}/task/new`,

                {
                    title , description
                },
                {
                headers:{
                    "Content-Type":"application/json",
                },
                withCredentials:true,
                }
            )
            // console.log(data)
            toast.success(`${data.message} successfully`)
            setDesc("");
            setTitle("")
            setIsLoading(false);
            setRefresh(prev=>!prev);

        } catch (error) {
            toast.error(error.response.data.message);
            setIsLoading(false);
            setRefresh(prev=>!prev);
        }
    }

    const updateHandler = async(id)=>{
        try {
            const {data} = await axios
                .put(`${server}/task/${id}`,
                {},
                {
                    withCredentials: true
                })
            toast.success(`${data.message} sucessfully`);
            setRefresh(prev=>!prev);
        } catch (error) {
            toast.error(error.response.data.message);
            setRefresh(prev=>!prev);
        }
    }

    const deleteHandler = async(id)=>{
        try {
            const {data} = await axios
                .delete(`${server}/task/${id}`,
                {
                    withCredentials: true
                })
            toast.success(`${data.message} sucessfully`);
            setRefresh(prev=>!prev);
        } catch (error) {
            toast.error(error.response.data.message);
            setRefresh(prev=>!prev);
        }

    }

    useEffect(()=>{
        axios
            .get(`${server}/task/mytasks`,{
                withCredentials: true
            })
            .then(res=>{
                console.log("hi")
                setTasks(res.data.allTasks);
                setRefresh(prev=>!prev);
                // console.log(tasks);
            })
            .catch(e=>{
                toast.error(e.response.data.message);
                setRefresh(prev=>!prev);
            })
    },[refresh])
    console.log(tasks)

    if(!isauthenticated) return <Navigate to ={"/login"}/>


    return (
    
    isLoading ? <Loarder/>:(
        <div >

            <div className="bg-grey-lighter min-h-[60vh] flex flex-col">
                <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-1 rounded shadow-md shadow-gray-700 text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Add Task</h1>
                        <form onSubmit={onSubmitHandler} className='py-2'>


                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4  "
                                name="title"
                                value={title}
                                placeholder="Title" 
                                onChange={(e)=>{setTitle(e.target.value)}} required/>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="description"
                                value={description}
                                placeholder="Description" 
                                onChange={(e)=>{setDesc(e.target.value)}} required/>
                            <div className="w-1/2 justify-center align-middle m-auto">
                                <button type="submit" className="btn ">
                                    Add task
                                </button>
                            </div>
                            
                        </form>
                    </div>
                            
                </div>
            </div>
            
            <div className="border border-gray-100 p-2 m-2 rounded shadow-md">
                <div className='text-center m-auto  w-1/2 font-semibold text-2xl py-2'>Your tasks</div>
                <div className="text-center m-auto  w-1/2 font-semibold text-lg py-2">{tasks.length===0 && "No tasks! Your tasks will be displayed here"}</div>
                {
                    tasks ? tasks.map((e)=>{
                        return <div className="m-2 " key={e._id}>
                                <div className="">
                                    <TaskItems 
                                        title={e.title} 
                                        description={e.description} 
                                        isCompleted={e.isCompleted}
                                        updateHandler={updateHandler}
                                        deleteHandler={deleteHandler}
                                        id={e._id}/>
                                </div>
                        </div>
                    }) :(
                        <div>
                            no 
                        </div>
                    )
                }

            </div>

        </div>
    )
    )
}

export default Tasks
