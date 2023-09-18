'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import DragItem from './sidePanel/DragItem'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

const SideBarActions = () => {
    return (
        <Box p={5} bgColor="#2e3748" position="sticky" w="100%" top={0}>
            <Stack direction='column' spacing={4}>
                <InputGroup size='sm'>
                    <InputRightElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputRightElement>
                    <Input type='text' placeholder='Search component' />
                </InputGroup>
                <Button leftIcon={<AddIcon />} size='sm' bg='gray.200' borderColor='gray.200' variant='solid'>
                    Create Template
                </Button>
            </Stack>
        </Box>
    )
}

const SidebarContent = ({ ...rest }: BoxProps) => {
  return (
    <Box
        maxH="calc(100vh - 3rem)"
        overflowY="auto"
        m={0}
        p={0}
        as="menu"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        h="full"
        {...rest}>
        <SideBarActions />
        {LinkItems.map((link) => (
            <DragItem label={link.name} />
        ))}
    </Box>
  )
}

export default function SimpleSidebar() {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
          <SidebarContent />
      </Box>
    )
}