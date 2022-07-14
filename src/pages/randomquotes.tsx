import { Badge, Card, Group, LoadingOverlay, Text } from "@mantine/core";
import axios from "axios";
import { useQuery } from "react-query";

function RandomQuotes() {
  const { isLoading, error, data } = useQuery(["animeQuotesMC"], () =>
    axios("https://animechan.vercel.app/api/random").then((res) => res.data)
  );
  if (isLoading) return <LoadingOverlay visible />;
  return (
    <Card shadow="sm" p="lg" mt="lg">
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500}>{data.character}</Text>
        <Badge variant="light">{data.anime}</Badge>
      </Group>

      <Text size="sm">{data.quote}</Text>
    </Card>
  );
}

export default RandomQuotes;
