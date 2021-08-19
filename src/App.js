import { useReducer } from "react";
import { ContextApp, initialState, reducer } from "./store.js";
import { CreateComment } from "./components/createComment/CreateComment";
import { LastComments } from "./components/lastComments/LastComments";
import { LastCommentsHeader } from "./components/lastCommentsHeader/LastCommentsHeader";
import { UserInfo } from "./components/userInfo/UserInfo";
import "./app.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <div className="wrapper">
        <UserInfo />
        <LastCommentsHeader />
        <LastComments />
      </div>
      <CreateComment />
    </ContextApp.Provider>
  );
}

export default App;
