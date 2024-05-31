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

  const [showModal, setShowModal] = useState(false);
  const [toDoId, setTodoId] = useState(0);

  const hideModal = (e) => {
    if (e.target.id == "ModalEdit") {
      setShowModal(false);
    }
  };

  // edit to do
  const EditTodo = (todoVol) => {
    setShowModal(true);
    const filtertodo = todos.map((todo) => {
      if (todo.id === toDoId) {
        return { ...todo, value: todoVol };
      }
      return todo;
    });
    setTodos(filtertodo);
  };

  // delite to do
  const DeliteTodo = (id) => {
    const filterTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filterTodo);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[cover] bg-[url('https://i.pinimg.com/originals/19/45/63/1945638ff4b17895fe014cfa0eb59608.jpg')] ">
      <div className="w-[90%] md:w-[450px] backdrop-blur-[220px] rounded-md h-[600px]">
        <Form todos={todos} setTodos={setTodos} />

        <ul className="w-full">
          {todos.map((item) => {
            return (
              <>
                <li
                  key={item.id}
                  className="w-[80%] flex items-center mt-5 rounded bg-slate-300 mx-auto"
                >
                  <p className="font-roboto w-[85%] h-[auto] p-[6px] ">
                    {item.value}
                  </p>
                  <div className="flex gap-2 mr-1">
                    <div onClick={EditTodo}>
                      <EditIcon
                        onClick={() => setTodoId(item.id)}
                        className="cursor-pointer"
                      />
                    </div>
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

      {showModal && (
        <div
          onClick={hideModal}
          id="ModalEdit"
          className=" fixed flex items-center justify-center bg-[#00000081] w-full h-[100vh]"
        >
          <input
            className="p-1 w-[240px] font-roboto outline-none rounded-md"
            type="text"
            onChange={(e) => EditTodo(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
