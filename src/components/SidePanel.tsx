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

import type { RootState } from '../app/store'
import { createTemplate, renameTemplate } from '../app/actions'
import { connect, ConnectedProps } from 'react-redux'
import { CodeTemplate } from '../app/types'
import { getTemplates } from '../app/selectors'
// import { TString } from '../features/CodeTemplateSlice'

const mapStateToProps = (state: RootState) => {
    return { templates: getTemplates(state) };
};

// Action creators
const mapDispatchToProps = {
    createTemplate,
    renameTemplate
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type SidePanelPropsFromRedux = ConnectedProps<typeof connector>

const SidePanelActions = (props: SidePanelPropsFromRedux) => {
    const { createTemplate } = props
    return (
        <Box p={5} bgColor="#2e3748" position="sticky" w="100%" top={0}>
            <Stack direction='column' spacing={4}>
                <InputGroup size='sm'>
                    <InputRightElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputRightElement>
                    <Input type='text' placeholder='Search component' />
                </InputGroup>
                <Button onClick={() => createTemplate({id: crypto.randomUUID(), label: 'WOO', codeLiteral: `` })} leftIcon={<AddIcon />} size='sm' bg='gray.200' borderColor='gray.200' variant='solid'>
                    Create Template
                </Button>
            </Stack>
        </Box>
    )
}

const SidePanel = ({...props}: SidePanelPropsFromRedux) => {
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
            h="full">
            <SidePanelActions {...props} />
            {props.templates.map((template: CodeTemplate, templateIndex: number) => (
                <DragItem label={template.label} key={template.id} index={templateIndex} {...props} />
            ))}
        </Box>
    )
}

export default connector(SidePanel)