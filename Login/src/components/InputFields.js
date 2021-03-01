import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField:  {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#97144d"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#97144d"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#97144d"
    }
  }
}));
  

export default (props) => {
    const { value, onChange, ...rest } = props;
    const fieldName = Object.keys(rest);
    const classes = useStyles();
    return (
        <TextField className={classes.textField}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={fieldName[0]}
        label={fieldName[0] === "email" ? "Email Address" : "Password"}
        name={fieldName[0]}
        type={fieldName[0]}
        value={value}
        autoComplete={fieldName[0]}
        autoFocus={fieldName[0] === "email" ? true : false}
        onChange={onChange}
      />
    )
}