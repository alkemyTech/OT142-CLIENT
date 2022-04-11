import React, { useState, useEffect } from 'react';
import MembersTable from './MembersTable';
import { getMembers, searchMembers } from '../../Services/membersService';
import MembersSearch from './MembersSearch';

import { Box, Center } from '@chakra-ui/react';
import { debouncer } from '../../utils/debouncer';

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembers().then((response) => setMembers(response.data));
  }, []);

  return <MembersTable members={members} />;
};

export default Members;
