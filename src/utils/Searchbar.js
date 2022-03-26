import { Input } from '@chakra-ui/react';

const Searchbar = ({ handleChange }) => {
  return (
        <Input placeholder='Search' size={'lg'} w={'30%'} onChange={(e) => handleChange(e)}/>
  );
};

export default Searchbar;
