import { TextField } from "@mui/material";

function Input(props) {
  return (
    <form onSubmit={props.handleInsertClick}>
      <TextField
        id="standard-basic"
        variant="standard"
        type="text"
        required={true}
        value={props.input}
        onChange={props.handleChangeText}
      />
      {/* <input
        type="text"
        required={true}
        value={props.input}
        onChange={props.handleChangeText}
      /> */}
      <input type="submit" value="Create" />
    </form>
  );
}

export default Input;
