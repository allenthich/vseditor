import { useDrag } from 'react-dnd'
import { Text, Box, Menu, MenuButton, IconButton, MenuList, MenuItem, Stack, Spacer, Editable, EditablePreview, EditableInput, Input, useEditableControls, ButtonGroup, Flex } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, DragHandleIcon, EditIcon, HamburgerIcon, SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { SidePanelPropsFromRedux } from '../SidePanel'

const DragItemActions = (props: DragItemProps) => {
    const { label, index } = props
    /* Here's a custom control */
    const EditableControls = () => {
      const {
        getEditButtonProps,
      } = useEditableControls()
  
      return (
        <IconButton aria-label='Rename' size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
      )
    }
  
    return (
      <Editable
        textAlign='center'
        defaultValue={label}
        isPreviewFocusable={false}
        onSubmit={newLabel => props.renameTemplate(index, newLabel)}
      >
        <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} />
        <EditableControls />
      </Editable>
    )
}


const DragItemType = 'DRAGITEM_TYPE'

type DragItemProps = SidePanelPropsFromRedux & {
    label: string,
    index: number
}

const DragItem = (props : DragItemProps) => {
    const {
        label
    } = props
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
                <DragItemActions {...props} />
            </Box>
        </Stack>
    )
}
export default DragItem