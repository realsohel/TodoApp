import React from 'react'

const TaskItems = ({title, description, isCompleted, updateHandler, deleteHandler, id}) => {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
    <>
        <div className="flex border py-2  w-1/2 m-auto pl-12 bg-white rounded shadow-sm shadow-gray-500">
            <div className="w-[100%]">
                <h2 className='font-medium text-xl'>{capitalizeFirst(title)}</h2>
                <p className='font-medium text-lg text-gray-600'>{capitalizeFirst(description)}</p>
            </div>
            <div className=" flex text-right  ">
                <div className="my-5 mx-3 ">
                <input type="checkbox" onChange={()=>{updateHandler(id)}} checked={isCompleted} className='py-2 px-1 cursor-pointer bg-white  text-gray-700 focus:gray-700 focus:ring-0'/>
                </div>
                <div className="mx-2 font-medium">
                <button onClick={()=>{deleteHandler(id)}} className='bg-gray-700 my-2 p-2 border border-gray-700 text-white rounded hover:bg-white hover:text-gray-700'> Delete </button>

                </div>
            </div>
        </div>
    </>
    )
}

export default TaskItems;
