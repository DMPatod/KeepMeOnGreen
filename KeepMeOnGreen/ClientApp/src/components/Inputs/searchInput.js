import React, { useCallback, useState } from "react";
import {
  FormControl,
  InputLabel,
  Grid,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import qs from "qs";
import SelectionListModal from "../Modals/SelectionListModal";

const SearchInput = (props) => {
  const [error, setError] = useState(false);
  const [responseList, setResponseList] = useState(null);

  const {
    name,
    label,
    display,
    requestUrl,
    useState: state,
    modalCols,
    required,
    disabled,
    placeholder,
    size,
    params,
    urlParam = true,
  } = props;

  const [obj, setObj] = state;
  const objInput = obj[name];

  return (
    <React.Fragment>
      <Grid item sm={size}>
        <FormControl fullWidth variant="filled">
          <InputLabel>
            {label}
            {required ? <em color="red">* </em> : <> </>}
          </InputLabel>
          <FilledInput
            disabled={disabled}
            placeholder={placeholder}
            value={obj[name] === undefined ? "" : objInput.display}
            onChange={useCallback(
              (e) => {
                setObj({
                  ...obj,
                  [name]: {
                    ...objInput,
                    display: e.target.value,
                  },
                });
              },
              [obj, objInput, name, setObj]
            )}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={useCallback(() => {
                    let stateObj = {};
                    if (objInput !== undefined) stateObj = objInput;
                    Axios.get(
                      requestUrl +
                        (urlParam && stateObj.display !== undefined
                          ? stateObj.display
                          : ""),
                      {
                        params: { ...params },
                        paramsSerializer: (ps) => {
                          for (var prop in ps) {
                            if (ps[prop] === "") {
                              ps[prop] = null;
                            }
                          }
                          return qs.stringify(ps, {
                            arrayFormat: "brackets",
                            skipNulls: true,
                            encode: false,
                          });
                        },
                      }
                    )
                      .then((resp) => {
                        setError(false);
                        if (resp.data.metadata || Array.isArray(resp.data)) {
                          setResponseList(resp.data);
                        } else {
                          var item = resp.data;
                          setObj({
                            ...obj,
                            [name]: {
                              ...item,
                              display: item[display],
                            },
                          });
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        setError(true);
                      });
                  }, [
                    requestUrl,
                    params,
                    objInput,
                    urlParam,
                    obj,
                    name,
                    display,
                    setObj,
                  ])}
                >
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            }
            error={error}
          />
        </FormControl>
      </Grid>
      {responseList !== null ? (
        <SelectionListModal
          title={label}
          show={Array.isArray(responseList)}
          cols={modalCols}
          dataList={responseList}
          onSelect={(item, index) => {
            setObj({
              ...obj,
              [name]: {
                ...item,
                display: item[display],
              },
            });
            setResponseList(null);
          }}
          onCancel={() => {
            setResponseList(null);
          }}
        />
      ) : null}
    </React.Fragment>
  );
};

export default SearchInput;
