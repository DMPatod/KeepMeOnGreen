import React from "react";
import { Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      DMPATOD CONSULTORIA TECNOLOGICA LTDA - Todos os direitos reservados -
      {" " + new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
