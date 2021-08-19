import { useState, useContext, useEffect } from "react";
import { ContextApp } from "../../store";
import "./index.scss";

export const CreateComment = () => {
  const { dispatch } = useContext(ContextApp);
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    dispatch({
      type: "newMessage",
      payload: {
        name: "Unknown",
        date: new Date()
          .toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .slice(0, -3),
        msg: message,
      },
    });
    setMessage("");
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 13 && e.ctrlKey) {
        submitHandler();
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [message]);

  return (
    <div className="createCommentWrapper">
      <textarea
        className="boxsizingBorder"
        name="msg"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input
        type="button"
        value="Написать консультанту"
        onClick={submitHandler}
      />
    </div>
  );
};
