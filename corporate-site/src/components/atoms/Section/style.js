import { css } from "styled-components";
import Theme from 'theme'

const FullPageSectionStyle = css`
    background-color: ${props => props.backgroundColor || `${Theme.color.grey900}` };
    padding: ${Theme.space.medium} ${Theme.space.tiny};
`;

const InnerSectionStyle = css`
    padding: ${Theme.space.small} ${Theme.space.tiny};
`;

export { FullPageSectionStyle, InnerSectionStyle };