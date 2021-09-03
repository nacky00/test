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
    font-size: ${Theme.font.medium};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
`

const ElementSubHeader = css`
    font-size: ${Theme.font.normal};
    font-weight: ${Theme.weight.normal};
    color: ${Theme.color.grey400};
`

const SectionHeader = css`
    font-family: "Gill Sans";
    font-size: ${Theme.font.xxlarge};
    font-weight: ${Theme.weight.medium};
    letter-spacing: 0.1rem;
`

// Body Text
const NormalText = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

const NormalLi = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
    padding-bottom: 0.4rem;
`

const NormalOl = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

const NormalUl = css`
    font-size: ${Theme.font.normal};
    color: ${Theme.color.grey400};
`

export { PageMainTitle, ElementHeader, ElementSubHeader, SectionHeader, NormalText, NormalLi, NormalOl, NormalUl };