import React, { useCallback } from "react";
import { FormControl, InputLabel, Grid, FilledInput } from "@material-ui/core";

const BasicInput = (props) => {
  const {
    name,
    label,
    useState: state,
    required,
    disabled,
    placeholder,
    size,
  } = props;

  const [obj, setObj] = state;

  return (
    <Grid item sm={size}>
      <FormControl fullWidth variant="filled">
        <InputLabel>
          {label}
          {required ? <em color="red">* </em> : <> </>}
        </InputLabel>
        <FilledInput
          disabled={disabled}
          placeholder={placeholder}
          value={obj[name] === undefined ? "" : obj[name]}
          onChange={useCallback(
            (e) => {
              setObj({
                ...obj,
                [name]: e.target.value,
              });
            },
            [obj, name, setObj]
          )}
        />
      </FormControl>
    </Grid>
  );
};

export default BasicInput;
