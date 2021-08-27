import { css } from "styled-components";
import Theme from 'theme'

const FullPageSectionStyle = css`
    background-color: ${props => props.backgroundColor || `${Theme.color.grey900}` };
    padding: 6rem 0;
`;

const InnerSectionStyle = css`
    padding: 4rem 2rem;
`;

export { FullPageSectionStyle, InnerSectionStyle };