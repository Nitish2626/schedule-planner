import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddTodoForm from "./components/AddTodoForm";
import SingleTodo from "./components/SingleTodo";
import "crypto";
import EditTodoForm from "./components/EditTodoForm";

const App = () => {

  const [searchValue,setSearchValue]= useState("");
  const [editId, setEditId]= useState();

  const [showAddTodoForm, setShowTodoForm]= useState(false);
  const [showEditTodoForm, setShowEditTodoForm]= useState(false);

  const [allTodos, setAllTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  const addTodo=()=>{
    setShowTodoForm(true);
  };

  const handleEdit = (id) => {
    setEditId(id);
    setShowEditTodoForm(true);
  };

  const handleDelete = (id) => {
    const deleteTodos = allTodos.filter((f) => f.id !== id);
    localStorage.setItem("todos", JSON.stringify(deleteTodos));
    setAllTodos(deleteTodos);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center py-2'>
      <h1 className='text-2xl font-semibold'>
        Todo App
      </h1>

      <section className='w-11/12 flex items-center mt-20 sm:w-6/12'>
        <input
          type='search'
          placeholder="Search..."
          onChange={(e)=> setSearchValue(e.target.value)}
          className='w-10/12 h-10 px-3 text-lg rounded-3xl outline-none'
        />
        <button
          onClick={addTodo}
          className='w-10 h-10 flex items-center justify-center text-2xl bg-black font-semibold rounded-full ml-1 hover:bg-[#242424]'
        >
          <IoMdAdd className="text-blue-500" />
        </button>
      </section>

      <ul className='w-full flex justify-center flex-wrap gap-4 mt-12'>
        {allTodos?.length !== 0
          ? allTodos
          ?.filter((v)=> v.todo.toLowerCase().includes(searchValue?.toLowerCase()))
          .map((t) => {
            return <SingleTodo 
              key={t.id}
              id={t.id}
              todo={t.todo}
              createdAt={t.createdAt}
              updatedAt={t.updatedAt}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          })
          : <h1 className="text-lg text-white font-semibold">
              No Todos Found !
            </h1>
        }
      </ul>

      {showAddTodoForm &&
        <AddTodoForm
          todos={allTodos}
          setTodoInfo={setAllTodos}
          hideTodoForm={setShowTodoForm}
        />
      }
      {showEditTodoForm &&
        <EditTodoForm
          editId= {editId}
          allTodos={allTodos}
          setTodoInfo={setAllTodos}
          hideTodoForm={setShowEditTodoForm}
        />
      }
    </div>
  );
};

export default App;