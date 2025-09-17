import React from "react";

const commentsData = [
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [
      {
        name: "qwerty",
        text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
        reply: [],
      },
    ],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [
      {
        name: "qwerty",
        text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
        reply: [
          {
            name: "qwerty",
            text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [
      {
        name: "qwerty",
        text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
        reply: [
          {
            name: "qwerty",
            text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [],
  },
  {
    name: "qwerty",
    text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
    reply: [
      {
        name: "qwerty",
        text: "loream epsum wqw nmbjkdskc klshkldjsdkhnmnvj jkhschs",
        reply: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex my-2 bg-gray-100">
      <img
        className="w-8 h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="commentProfile"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) =>
  comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl"> </h1>
      <div>
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
