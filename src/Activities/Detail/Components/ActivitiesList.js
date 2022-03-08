import {
  Button,
  Image,
  Box,
  Container,
  Text,
  Heading,
  Spinner,
  Grid,
  Center,
} from "@chakra-ui/react";
import Title from "../../../Components/Titles";
import { useHistory } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { get } from "../../../Services/publicApiService";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ActivitiesList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  console.log(data);

  const getData = useCallback(async () => {
    try {
      const { data } = await get("/activites");
      setData(data.data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const history = useHistory();

  const handleActivity = (id) => {
    history.push(`/actividades/${id}`);
  };

  return (
    <Container maxW="container.lg">
      <Title>Actividades</Title>

      {loading === true && (
        <Center>
          <Spinner mt="1em" p="1em" size="xl" />
        </Center>
      )}

      {error === false ? (
        data?.length > 0 &&
        data.map((activity) => (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box key={activity.id}>
              <Heading as="h3">{activity.name}</Heading>
              <Text>{activity.description}</Text>
              <Box>
                <Image boxSize="100px" src={activity.image} />
              </Box>
              <Button
                variant="solid"
                size="xs"
                onClick={() => handleActivity(activity.id)}
              >
                Ver Detalle
              </Button>
            </Box>
          </Grid>
        ))
      ) : (
        <Center>
          <Alert mt="1em" p="1em" status="error" width="auto">
            <AlertIcon />
            <AlertTitle mr={2}> Ups! Algo salió mal.</AlertTitle>
          </Alert>
        </Center>
      )}
    </Container>
  );
};
export default ActivitiesList;
