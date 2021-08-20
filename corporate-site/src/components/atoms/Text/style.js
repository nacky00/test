import { css } from "styled-components";
import Theme from 'theme'

// Title
const PageMainTitle = css`
    font-size: ${Theme.font.xlarge};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
    margin-bottom: 1rem;
`
const ElementHeader = css`
    font-size: ${Theme.font.normal};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
`

// Body Text
const NormalText = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

const NormalLi = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

const NormalOl = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

export { PageMainTitle, ElementHeader, NormalText, NormalLi, NormalOl };