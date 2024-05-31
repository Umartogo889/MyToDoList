// components
import Form from "./components/Form";
// hooks
import { useState } from "react";

// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const DeliteTodo = (id) => {
    const filterTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filterTodo);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      <div className="w-[450px] bg-red-300 rounded-md h-[500px]">
        <Form todos={todos} setTodos={setTodos} />

        <ul className="w-full">
          {todos.map((item) => {
            return (
              <>
                <li className="w-[80%] flex items-center mt-5 rounded bg-slate-300 mx-auto">
                  <p className="font-roboto w-[85%] p-[6px] ">{item.value}</p>
                  <div className="flex gap-2 mr-1">
                    <EditIcon className="cursor-pointer" />
                    <DeleteIcon
                      onClick={() => DeliteTodo(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
