import React, { useCallback, useRef } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const FilesInput = (props) => {
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

  const removeCallback = useCallback(
    (index) => {
      let tempArr = obj[name];
      tempArr.splice(index, 1);
      setObj({ ...obj, [name]: [...tempArr] });
    },
    [obj]
  );

  return (
    <Grid item sm={size}>
      <input
        type="file"
        accept={accept}
        ref={hiddenInput}
        // style={{ display: "none" }}
        onChange={useCallback(
          (e) => {
            if (obj[name]) {
              setObj({ ...obj, [name]: [...obj[name], e.target.files[0]] });
            } else {
              setObj({ ...obj, [name]: [e.target.files[0]] });
            }
          },
          [obj]
        )}
      />
      <Grid container>
        <Table>
          <TableHead>
            <TableRow>Nome</TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(obj[name]) &&
              obj[name].map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {index} + {item.name}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default FilesInput;
