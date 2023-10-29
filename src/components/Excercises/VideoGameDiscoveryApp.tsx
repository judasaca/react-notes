import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./VideoGame/navBar";
import GameGrid from "./VideoGame/GameGrid";

const VideoGameDiscoveryApp = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default VideoGameDiscoveryApp;
