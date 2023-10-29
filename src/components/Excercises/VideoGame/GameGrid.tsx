import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={"10px"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
