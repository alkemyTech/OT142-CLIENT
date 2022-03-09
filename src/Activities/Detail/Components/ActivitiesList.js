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
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Title from "../../../Components/Titles";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../../Reducers/activitiesSlice";

const ActivitiesList = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { activitiesReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    setData(activitiesReducer.activities);
  }, [activitiesReducer]);

  const handleActivity = () => {
    console.log("-------------");
  };

  return (
    <Container maxW="container.lg">
      <Title>Actividades</Title>

      {activitiesReducer.status === "loading" && (
        <Center>
          <Spinner mt="1em" size="xl" />
        </Center>
      )}

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data?.length > 0 &&
          data.map((activity) => (
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
          ))}
      </Grid>

      {activitiesReducer.status === "failed" && (
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
