import { css } from "styled-components";

export const NormalWrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || `center` };
    margin: 0 auto;
    max-width: 800px;
`