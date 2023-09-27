import { useDrag } from 'react-dnd'
import { Text, Box, Menu, MenuButton, IconButton, MenuList, MenuItem, Stack, Spacer, Editable, EditablePreview, EditableInput, Input, useEditableControls, ButtonGroup, Flex } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, DragHandleIcon, EditIcon, HamburgerIcon, SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { getTemplate } from '../../app/selectors'
import { RootState } from '../../app/store'
import { renameTemplate } from '../../app/actions'
import { connect } from 'react-redux'

const DragItemType = 'DRAGITEM_TYPE'

const mapStateToProps = (state: RootState, ownProps: any) => {
  return { template: getTemplate(state, ownProps.index) }
};

// Action creators
const mapDispatchToProps = {
  renameTemplate
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const DragItem = (props: any) => {
    const { index, template: { label } } = props
    const [, drag] = useDrag({
        item: { id: label },
        type: DragItemType
    })
    
    const boxProps: any = {
        cursor: 'no-drop',
        color: 'blackAlpha.600',
        ref: drag
    }

    const DragItemActions = () => {
      /* Here's a custom control */
      const EditableControls = () => {
        const { getEditButtonProps, } = useEditableControls()
        return <IconButton aria-label='Rename' size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
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
                <DragItemActions />
            </Box>
        </Stack>
    )
}
export default connector(DragItem)