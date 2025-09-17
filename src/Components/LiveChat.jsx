import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import {
  generateRandomName,
  generateRandomString,
  randomEmojis,
} from "../Utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(40) + randomEmojis(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 shadow-sm overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Abhishek Kulkarni",
              message: liveMessage + randomEmojis(),
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 border border-black p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-2 mx-2 bg-green-200">Send 🚀</button>
      </form>
    </>
  );
};

export default LiveChat;
