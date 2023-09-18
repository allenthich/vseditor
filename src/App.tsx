import * as React from "react"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
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
  Stack,
} from "@chakra-ui/react"
import Header from "./components/Header"
import Inspector from "./components/Inspector"
import SidePanel from "./components/SidePanel"
import CodePanel from "./components/CodePanel"

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
      <DndProvider backend={HTML5Backend}>
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
            <Stack direction='column'>
              <CodePanel />
            </Stack>
          </GridItem>
          <GridItem pl='2' bg='purple.300' area={'rPanel'}>
          <Inspector />
          </GridItem>
        </Grid>
      </DndProvider>
    </Grid>
  </ChakraProvider>
)
