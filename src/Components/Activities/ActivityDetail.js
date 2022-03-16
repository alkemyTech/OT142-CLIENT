import { useEffect, useState, useCallback } from "react";
import { Container, Text, Image, Spinner, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {get} from "../../Services/privateApiService"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const { data } = await get(`/activities/${id}`);
      setActivity(data.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading === true && (
        <Center>
          {" "}
          <Spinner mt="1em" d="flex" size="xl" />
        </Center>
      )}

      {error === false ? (
        <Container
          d="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text as="h1">{activity.name}</Text>
          <Image boxSize={200} src={activity.image} />
          <Text as="h3" align="center">
            {activity.description}
          </Text>
        </Container>
      ) : (
        <Center>
          {loading === false && (
            <Alert mt="1em" p="1em" status="error" width="auto">
              <AlertIcon />
              <AlertTitle mr={2}> Ups! Algo salió mal.</AlertTitle>
            </Alert>
          )}
        </Center>
      )}
    </>
  );
};

export default ActivityDetail;
