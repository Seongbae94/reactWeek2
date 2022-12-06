import { nanoid } from "nanoid";

const TODOSETTING = "TODOSETTING";
const DONETOGGLE = "DONETOGGLE";
const DELETETODO = "DELETETODO";

export function todoSetting(payload) {
  return {
    type: "TODO_SETTING",
    payload,
  };
}
export function doneToggle(id) {
  return {
    type: "DONE_TOGGLE",
    id,
  };
}
export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    id,
  };
}

const initialState = [
  {
    id: nanoid(),
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: nanoid(),
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_SETTING":
      console.log(action.payload);
      return [
        ...state,
        {
          id: nanoid(),
          title: action.payload.title,
          body: action.payload.content,
          isDone: false,
        },
      ];
    case "DONE_TOGGLE": {
      const toggled = state.map((prev) =>
        prev.id === action.id ? { ...prev, isDone: !prev.isDone } : { ...prev }
      );
      return [...toggled];
    }

    case "DELETE_TODO":
      const filtered = state.filter((prev) => prev.id !== action.id);
      return [...filtered];

    default:
      return state;
  }
}
