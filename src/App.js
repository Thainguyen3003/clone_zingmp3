import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (todos.indexOf(work.toString()) != -1) {
      toast.warn("Trùng công việc");
    } else {
      setTodos([...todos, work]);
      setWork("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="flex flex-col gap-8 h-screen items-center justify-center border border-red-50">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content:</h3>
          <ul>
            {todos?.map((item, index) => (
              <li key={index}>
                {index + 1} - {item}
                <button
                  type="button"
                  className="ml-4 px-2 bg-red-400 rounded-md"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
