import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTasks,addTasks, deleteTasks, setLoggedin,  updateTasks } from "../home/homeSlice";


const Home = () => {
  const userdata = useSelector((state) => ({
    fn: state.home.fn,
    ln: state.home.ln,
    email: state.home.email,
    todos:state.home.tasks,
    id:state.home.id
  }));


  const dispatch = useDispatch();
  const [isEdit, setIsedit] = useState(false);
  const [editForm, setEditform] = useState(null);
  const [isAdd, setIsadd] = useState(false);
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleEditchange = (e) => {
    setEditform(e.target.value);
  };
  const handleAdd = async () => {
    
    console.log("1")
    try {
        const result = await dispatch(addTasks({uid:userdata.id,task:task}))
        console.log("Here is the result",result.payload)
        setTask("")
        setIsadd(false)
    } catch (error ) {
        console.error("Error in making the Addreq",error) 
    }
}
  const handleToggle = (i) => {
    setIsedit((prev) => (prev === i ? null : i));
    setEditform(userdata.todos[i]);
  };
  const handleLogout = () => {
    dispatch(setLoggedin(null));

  };
  const handleDelete = async(idx) => {
    try {
        const result = await dispatch(deleteTasks({uid:userdata.id,tid:idx}))
        console.log("Here is the result",result.payload)
    } catch (error ) {
        console.error("Error in making the Addreq",error) 
    }
  }
  const handleUpdate = async(idx, updatedTask) => {
    try {
      const result = await dispatch(updateTasks({uid:userdata.id,tid:idx,utask:updatedTask}))
      setIsedit(false)
      console.log("Here is the result",result.payload)
  } catch (error ) {
      console.error("Error in making the Addreq",error) 
  }
    

  };
  const showProfile = () => {};
  useEffect(() => {
    if (userdata.id) dispatch(fetchTasks(userdata.id));
  }, [dispatch, userdata.id]);
  return (
    <div className="page">
      <div className="navbar">
        <div className="profile_icon" onClick={showProfile}>
          <i
            className="bx bxs-user"
            style={{ color: "#9e9999", fontSize: "xxx-large" }}
          ></i>
        </div>
        <div>
          <button onClick={handleLogout} className="btn">
            signout
          </button>
        </div>
      </div>
      <div className="list">
        <h1> {userdata.fn}'s Notepad</h1>
        <div className="todo_list">
          <h5>Todos</h5>
          <div className="todos">
            {userdata.todos.map((todo, idx) => (
              <div className="todo" key={idx}>
                {isEdit === idx ? (
                  <textarea
                    className="todo_text"
                    style={{ width: "60%" }}
                    onChange={handleEditchange}
                    value={editForm}
                  />
                ) : (
                  <div className="todo_text">{todo}</div>
                )}
                <div style={{ width: "20%", textAlign: "center" }}>
                  {isEdit === idx ? (
                    <button
                      onClick={() => handleUpdate(idx, editForm)}
                      className="todo_icon"
                    >
                      <i className="bx bxs-bookmark"></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggle(idx)}
                      className="todo_icon"
                    >
                      <i className="bx bx-edit-alt"></i>
                    </button>
                  )}
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="todo_icon"
                  >
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))}
            {userdata.todos.length === 0 ? (
              <div>
              <input
                className="inputbox"
                placeholder="enter task"
                type="text"
                name="task"
                onChange={handleChange}
                value={task}
              />
              <button 
                onClick={handleAdd}
                className="btn"style={{marginLeft:'3px'}}
              >
                Add
              </button>
            </div>
            ) : (
              <button   className="btn"style={{marginLeft:'3px'}} onClick={() => setIsadd(true)}>Add task</button>
            )}
            {isAdd && (
              <div>
                <input
                  className="inputbox"
                  placeholder="enter task"
                  type="text"
                  name="task"
                  onChange={handleChange}
                  value={task}
                />
                <button 
                  onClick={handleAdd}
                  className="btn"style={{marginLeft:'3px'}}
                >
                  Add
                </button>
                <button className="btn"style={{marginLeft:'3px'}} onClick={() => setIsadd(false)}>cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
