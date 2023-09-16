import { useDrag } from 'react-dnd'
import { Text, Box } from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'

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
        <Box
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
    )
}
export default DragItem