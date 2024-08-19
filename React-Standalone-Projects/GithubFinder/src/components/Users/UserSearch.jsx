import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubAction";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Enter a value first", "error");
    } else {
      //set the loading
      dispatch({
        type: "SET_LOADING",
      });

      const data = await searchUsers(text);

      //dispatch get users action
      dispatch({
        type: "GET_USERS",
        payload: data,
      });

      setText("");
    }
  };

  const clearHandler = () => {
    clearUsers();
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                value={text}
                onChange={inputHandler}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearHandler}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
