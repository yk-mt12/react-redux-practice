import React, { VFC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrease, increase } from "./redux/counterSlice";
import { getUsers } from "./redux/usersSlice";

export const App: VFC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const { users } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h2>Users</h2>
      {users &&
        users.map((user: any, index: any) => (
          <div key={index}>{user.name}</div>
        ))}
    </div>
  );
};
