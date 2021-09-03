import { css } from "styled-components";

const NormalWrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || `center` };
    margin: 0 auto;
    max-width: 800px;
`

const NarrowWrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || `start` };
    margin: 0 auto;
    max-width: 600px;
`

export { NormalWrapperStyle, NarrowWrapperStyle };