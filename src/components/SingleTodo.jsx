import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const SingleTodo = ({id, todo, createdAt, updatedAt, handleEdit, handleDelete}) => {

    const cDate= new Date(createdAt).toString().slice(0,-31);
    const uDate= new Date(updatedAt).toString().slice(0,-31);

    return (
        <li
            key={id}
            className='w-11/12 flex flex-col gap-2 bg-black rounded-3xl py-2 px-3 sm:w-96'
        >
            <section className="flex items-center justify-between">
                <h1
                    className="text-md font-semibold text-wrap overflow-hidden"
                    title={todo}
                >
                    {todo}
                </h1>

                <section className="flex items-center gap-2">
                    <button
                        onClick={()=> handleEdit(id)}
                        className="w-7 h-7 flex items-center justify-center text-xl rounded-full hover:bg-[#242424]"
                    >
                        <MdModeEdit />
                    </button>
                    <button
                        onClick={() => handleDelete(id)}
                        className="w-7 h-7 flex items-center justify-center text-xl rounded-full hover:bg-[#242424]"
                    >
                        <MdDelete />
                    </button>
                </section>
            </section>

            <h1 className="text-gray-400 text-sm">
                Created At : <span className='text-blue-500'>{cDate}</span>
                <br></br>
                Updated At : <span className='text-blue-500'>{uDate}</span>
            </h1>
        </li>
    );
};

export default SingleTodo;