import React from "react";
import { Box } from "@chakra-ui/react";

const ActivityContent = ({ htmlText }) => {
  return <Box dangerouslySetInnerHTML={{ __html: htmlText }}></Box>;
};

export default ActivityContent;
