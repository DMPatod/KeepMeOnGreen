import React, { useCallback } from "react";
import InputMask from "react-input-mask";
import { FormControl, InputLabel, Grid, FilledInput } from "@material-ui/core";

const MaskInput = (props) => {
  const {
    name,
    label,
    mask,
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
        <InputMask
          mask={mask}
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
        >
          {(inputProps) => (
            <FilledInput
              {...inputProps}
              disabled={disabled}
              placeholder={placeholder}
            />
          )}
        </InputMask>
      </FormControl>
    </Grid>
  );
};

export default MaskInput;
