import React, { useCallback, useRef } from "react";
import {
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { FaFileUpload } from "react-icons/fa";

const FileInput = (props) => {
  const {
    name,
    label,
    useState: state,
    required,
    disabled,
    size,
    accept,
  } = props;

  const hiddenInput = useRef(null);

  const [obj, setObj] = state;

  return (
    <React.Fragment>
      <input
        type="file"
        accept={accept}
        ref={hiddenInput}
        style={{ display: "none" }}
        onChange={useCallback(
          (e) => {
            setObj({
              ...obj,
              [name]: e.target.files[0],
            });
          },
          [obj, name, setObj]
        )}
      />
      <Grid item sm={size}>
        <FormControl fullWidth variant="filled">
          <InputLabel>
            {label}
            {required ? <em color="red">* </em> : <> </>}
          </InputLabel>
          <FilledInput
            disabled={disabled}
            readOnly
            value={obj[name] === undefined ? "" : obj[name].name}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  disabled={disabled}
                  onClick={() => hiddenInput.current.click()}
                >
                  <FaFileUpload />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default FileInput;
