import React, { useState, useEffect } from 'react';
import MembersTable from './MembersTable';
import { getMembers, searchMembers } from '../../Services/membersService';
import MembersSearch from './MembersSearch';

import { Box, Center } from '@chakra-ui/react';
import { debouncer } from '../../utils/debouncer';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = (e) => {
    if (e.target.value.length >= 2) {
      setIsInvalid(false);
      setSearchValue(e.target.value);
    } else {
      setIsInvalid(true);
      setSearchValue('');
    }
  };

  useEffect(() => {
    if (searchValue.length < 2) {
      searchMembers('')
        .then((response) => {
          setMembers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      searchMembers(searchValue)
        .then((response) => {
          console.log();
          setMembers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchValue]);

  return (
    <Box>
      <MembersSearch
        handleChange={debouncer(handleChange)}
        isInvalid={isInvalid}
      />
      <MembersTable members={members} />
    </Box>
  );
};

export default Members;
