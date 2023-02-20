import { TextField, styled } from "@mui/material";
const BoxTextArea = styled((props) => (
  <TextField
    multiline
    InputProps={{ disableUnderline: true, readOnly: true }}
    {...props}
  />
))(({ theme }) => ({
  width: "80%",
  border: "0",
  "& .MuiFilledInput-root": {
    border: "20px solid black",
    borderRadius: 15,
    color: "white",
  },
  "& .MuiTextField-root": {
    width: "50em",
  },
  "& .MuiInputBase-root": {
    color: "white",
    border: "none",
    "& fieldset": {
      border: "none",
    },
  },
}));

export { BoxTextArea };
