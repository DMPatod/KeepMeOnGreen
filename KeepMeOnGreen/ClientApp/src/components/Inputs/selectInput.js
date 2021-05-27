import React, { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";

const SelectInput = (props) => {
  const {
    name,
    label,
    useState: state,
    required,
    disabled,
    size,
    options,
  } = props;

  const [obj, setObj] = state;

  return (
    <Grid item sm={size}>
      <FormControl fullWidth variant="filled">
        <InputLabel>
          {label}
          {required ? <em color="red">* </em> : <> </>}
        </InputLabel>
        <Select
          style={{ minWidth: 185 }}
          disabled={disabled}
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
          {options.map((element, index) => {
            var value = element;
            var label = element;
            if (element.value) {
              value = element.value;
            }
            if (element.label) {
              label = element.label;
            }
            return (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectInput;
