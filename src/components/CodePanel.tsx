import { Box, Highlight, Text } from "@chakra-ui/react"

const EXAMPLE_CUSTOM_CODE = `
    <{TAG_TYPE} {{PROP1_NAME}="{PROP1_VALUE}"} 
        {ATTRIBUTE1} 
            {{PROP2_NAME}={PROP2_VALUE}}>
        {ATTRIBUTE_CONTENT}
    </{TAG_TYPE}>
`

// TODO: useHighlight Hook
const CodePanel = () => {
    return (
        <Box bgColor='white'>
            <Text contentEditable='true' whiteSpace='pre-wrap'>
                <Highlight query='type' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                    {EXAMPLE_CUSTOM_CODE}
                </Highlight>
            </Text>
        </Box>
    )
}
export default CodePanel