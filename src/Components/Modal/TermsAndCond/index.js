/* eslint-disable */
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  RadioGroup,
  useDisclosure,
  Stack,
  Box,
  Radio,
  Text
} from '@chakra-ui/react';
import { Document, Page, pdfjs } from 'react-pdf';
import Termspdf from '../../../Assets/terms-and-cond.pdf';

const TermsAndConditions = ({ handleChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [acceptDeclineValue, setAceptDeclineValue] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function loadSuccess ({ numPages }) {
    setNumPages(numPages);
  }

  const handleState = (string) => {
    setAceptDeclineValue(string);
    handleChange(string);
  };

  return (
    <>
      <RadioGroup value={acceptDeclineValue} onChange={setAceptDeclineValue}>
        <Stack direction="row">
          <Radio value="accept">He leido y acepto.</Radio>
          <Radio value="decline">No Acepto.</Radio>
        </Stack>
      </RadioGroup>
      <Button mt={3} onClick={onOpen} bg="lightgray">
        Leer Terminos y Condiciones
      </Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior={acceptDeclineValue}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader d="flex" justifyContent="center">
            Terminos y Condiciones
          </ModalHeader>
          <ModalBody>
            <Box>
              <Document file={Termspdf} onLoadSuccess={loadSuccess}>
                <Page pageNumber={pageNumber} setNumPages={pageNumber} />
              </Document>
              <Text>
                Page {pageNumber} of {numPages}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => onClose(handleState('accept'))}>
              Aceptar
            </Button>
            <Button onClick={() => onClose(handleState('decline'))}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TermsAndConditions;
