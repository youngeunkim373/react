import { useReducer } from "react";

function reducer(state, action) {
  console.log(action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const MyuseReducer02 = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChange} name="name" />
        <input value={nickname} onChange={onChange} name="nickname" />
      </div>

      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default MyuseReducer02;
