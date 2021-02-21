import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import RawInput from '../raw-input/RawInput'

// STYLES
const EditorWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    height: 100vh;
`

// COMPONENTS
const Editor = ({onChange, value, source}) => (
    <EditorWrapper>
        <RawInput onChange={onChange} value={value} />
        <ReactMarkdown className="preview" source={source} />
    </EditorWrapper>
)
 
export default Editor;