import React from 'react';
import { Box } from '@chakra-ui/react';

const ActivityContent = ({ htmlText }) => {
  return (
    <Box p="2em">
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </Box>
  );
};

export default ActivityContent;
