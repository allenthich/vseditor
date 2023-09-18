import { useDrag } from 'react-dnd'
import { Text, Box, Menu, MenuButton, IconButton, MenuList, MenuItem, Stack, Spacer } from '@chakra-ui/react'
import { DragHandleIcon, EditIcon, HamburgerIcon, SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons'

const DragItemActions = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<TriangleDownIcon />}
                variant='ghost'
                color='blackAlpha.600'
            />
            <MenuList>
                <MenuItem icon={<EditIcon />} command='⌘T'>
                    Rename
                </MenuItem>
                <MenuItem icon={<SettingsIcon />} command='⌘N'>
                    Configure
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

const DragItemType = 'DRAGITEM_TYPE'

type DragItemProps = {
    label: String
}

const DragItem = ({
    label
} : DragItemProps) => {
    const [, drag] = useDrag({
        item: { id: label },
        type: DragItemType
    })
    
    let boxProps: any = {
        cursor: 'no-drop',
        color: 'blackAlpha.600',
        ref: drag
    }
    return (
        <Stack direction='row'>
        <Box
            width='100%'
            boxSizing="border-box"
            transition="margin 200ms"
            my={1}
            borderRadius="md"
            p={1}
            display="flex"
            alignItems="center"
            {...boxProps}
            >
            <DragHandleIcon path="" fontSize="xs" mr={2} />
            <Text letterSpacing="wide" fontSize="sm" textTransform="capitalize">
                {label}
            </Text>
        </Box>
        <Spacer />
        <DragItemActions />
        </Stack>
    )
}
export default DragItem