import styled from 'styled-components'
import { Text } from '@siacashcoin/uikit'

const TextEllipsis = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default TextEllipsis
