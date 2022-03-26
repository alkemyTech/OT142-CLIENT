import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';

const FieldControl = ({ type, field, form, idName, title, icon }) => {
  return (
    <FormControl isInvalid={form.errors[idName] && form.touched[idName]}>

        <FormLabel htmlFor={idName}>{title}</FormLabel>
        {
            type === 'text'
              ? <InputGroup mb={2}>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={icon} color='gray.800' />}
                />
                <Input id={idName} placeholder={title} {...field} background={'gray.50'} />
            </InputGroup>
              : <Textarea id="firstName" placeholder={title} {...field} mb={2} maxH={300} background={'gray.50'} />
        }

        {form.errors[idName] && form.touched[idName]
          ? (
            <Alert status='error' borderRadius={5}>
                <AlertIcon />
                <AlertTitle>{form.errors[idName]}</AlertTitle>
            </Alert>
            )
          : null}

    </FormControl>
  );
};

export default FieldControl;
