import React, { useRef } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import "crypto";

const AddTodoForm = ({todos, setTodoInfo, hideTodoForm}) => {

    const todoRef= useRef();

    const addTodo=(e)=>{
        e.preventDefault();
        const saveTodo=[
            {
                id: crypto.randomUUID(),
                todo : todoRef.current.value,
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            ...todos
        ]
        setTodoInfo(saveTodo);
        localStorage.setItem("todos",JSON.stringify(saveTodo));
        hideTodoForm(false);
    };

    return (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-[#242424] bg-opacity-95">
            <form
                className="w-11/12 flex flex-col items-center justify-center gap-8 bg-black text-white rounded-lg py-4 sm:w-96"
                onSubmit={addTodo}
            >
                <h1 className="text-lg font-semibold text-center">
                    Add Todo
                </h1>

                <section className="flex flex-col items-center justify-center gap-3">
                    <FormInput
                        label="Todo Name"
                        inputRef={todoRef}
                        inputType="text"
                    />
                </section>

                <section className="flex items-center justify-center gap-2 text-lg">
                    <Button
                        buttonType= "submit"
                        buttonName="Add"
                    />
                    <Button
                        buttonType= "button"
                        buttonName="Cancel"
                        buttonFunc={() => hideTodoForm(false)}
                    />
                </section>
            </form>
        </div>
    );
};

export default AddTodoForm;