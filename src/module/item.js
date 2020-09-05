import data from "../data/data.json";

// 액션 이름
export const ACTIONS = {
  SHOW_ALL: "SHOW_ALL",
  SELECT_SKIRT: "SELECT_SKIRT",
  SELECT_TSHIRT: "SELECT_TSHIRT",
  SELECT_PANTS: "SELECT_PANTS",
  SELECT_BLUE: "SELECT_BLUE",
  SELECT_YELLOW: "SELECT_YELLOW",
  SELECT_PINK: "SELECT_PINK",
};

// action creator : 순수한 객체상태를 리턴함
export const selectAllAction = () => {
  return {
    type: ACTIONS.SHOW_ALL,
  };
};
export const selectSkirtAction = () => {
  return {
    type: ACTIONS.SELECT_SKIRT,
  };
};
export const selectTshirtAction = () => {
  return {
    type: ACTIONS.SELECT_TSHIRT,
  };
};
export const selectPantsAction = () => {
  return {
    type: ACTIONS.SELECT_PANTS,
  };
};
export const selectBlueAction = () => {
  return {
    type: ACTIONS.SELECT_BLUE,
  };
};
export const selectYellowAction = () => {
  return {
    type: ACTIONS.SELECT_YELLOW,
  };
};
export const selectPinkAction = () => {
  return {
    type: ACTIONS.SELECT_PINK,
  };
};

// reducer함수는 순수함수
// 매개변수만을 통해서 state 변경해야하므로 초기 state를
// 변하지 않는값, display될 변할 값으로 나눔
const initialState = { content: data.items, display: data.items };

// reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL:
      state.display = state.content;
      return state;
    case ACTIONS.SELECT_SKIRT:
      state.display = state.content.filter((value) => value.type === "skirt");
      return state;
    case ACTIONS.SELECT_TSHIRT:
      state.display = state.content.filter((value) => value.type === "tshirt");
      return state;
    case ACTIONS.SELECT_PANTS:
      state.display = state.content.filter((value) => value.type === "pants");
      return state;
    case ACTIONS.SELECT_BLUE:
      state.display = state.content.filter((value) => value.color === "blue");
      return state;
    case ACTIONS.SELECT_YELLOW:
      state.display = state.content.filter((value) => value.color === "yellow");
      return state;
    case ACTIONS.SELECT_PINK:
      state.display = state.content.filter((value) => value.color === "pink");
      return state;
    default:
      return state;
  }
};

export default itemReducer;
