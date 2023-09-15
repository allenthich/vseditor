import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./features/ColorModeSwitcher"
import { Logo } from "./features/Logo"
import Header from "./components/Header"
import Inspector from "./components/Inspector"
import SidePanel from "./components/SidePanel"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid
      templateAreas={`"header"
                      "body"`}
      gridTemplateRows={'3rem calc(100vh - 3rem)'}
      gridTemplateColumns={'1fr'}
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <Grid
        templateAreas={`"lPanel main rPanel"`}
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'250px 1fr 250px'}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='pink.300' area={'lPanel'}> 
          <SidePanel />
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='purple.300' area={'rPanel'}>
        <Inspector />
        </GridItem>
      </Grid>
    </Grid>
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box> */}
  </ChakraProvider>
)
