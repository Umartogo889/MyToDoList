import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ todos, setTodos }) => {
  const [todo, SetToDo] = useState("");

  function addNewTodo(e) {
    e.preventDefault();
    SetToDo("");
    if (todo) {
      setTodos((prev) => {
        return [...prev, { id: uuidv4(), value: todo, complate: false }];
      });
    }
  }

  //   set todo to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
  return (
    <div className="">
      <form className="flex w-full justify-center mt-10">
        <label className="flex gap-1 md:gap-3">
          <input
            className="w-[200px] sm:w-[300px] md:w-[250px] px-2 font-poppins rounded-md border border-[#000] outline-none"
            onChange={(e) => SetToDo(e.target.value)}
            value={todo}
            type="text"
          />
          <button
            onClick={addNewTodo}
            className="bg-yellow-400 font-poppins text-[10px] h-[30px] sm:text-[12px] py-1 md:py-[7px] px-2   tracking-wide rounded-md "
          >
            addTodo
          </button>
        </label>
      </form>
    </div>
  );
};

export default Form;
