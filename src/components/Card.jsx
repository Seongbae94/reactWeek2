import React from "react";

export default function Card({ info, toggle, del }) {
  let { desc, id, topic, done } = info;
  return (
    <div className="card-box">
      <h1 className="card-head">{topic}</h1>
      <p>{desc}</p>
      <button
        onClick={() => del(id)}
        style={{ marginRight: "10px" }}
        className="btn btn-redBorder"
      >
        삭제하기
      </button>
      {!done ? (
        <button onClick={() => toggle(id)} className="btn btn-greenBorder">
          완료
        </button>
      ) : (
        <button onClick={() => toggle(id)} className="btn btn-greenBorder">
          취소
        </button>
      )}
    </div>
  );
}
