import React, { useEffect, useRef } from 'react';
import FormInput from './FormInput';
import Button from './Button';

const EditTodoForm = ({ editId, allTodos, setTodoInfo, hideTodoForm }) => {

    const todoRef = useRef();

    useEffect(() => {
        const findData = allTodos.find((v) => v.id === editId);
        todoRef.current.value = findData.todo;
    }, []);

    const updateTodo = (e) => {
        e.preventDefault();
        const updatedTodo = allTodos.map((v) =>
            v.id === editId ? { ...v, todo: todoRef.current.value, updatedAt: Date.now() } : v
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodo));
        setTodoInfo(updatedTodo);
        hideTodoForm(false);
    };

    return (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-[#242424] bg-opacity-95">
            <form
                className="w-11/12 flex flex-col items-center justify-center gap-8 bg-black text-white rounded-lg py-4 sm:w-96"
                onSubmit={updateTodo}
            >
                <h1 className="text-lg font-semibold text-center">
                    Update Schedule
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
                        buttonType="button"
                        buttonName="Cancel"
                        buttonFunc={() => hideTodoForm(false)}
                    />
                    <Button
                        buttonType="submit"
                        buttonName="Update"
                    />
                </section>
            </form>
        </div>
    );
};

export default EditTodoForm;