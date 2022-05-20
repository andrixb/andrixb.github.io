import styled from 'styled-components';
import { green } from '../../../../shared/ui/styles/colors';
import { mSizePercent, mSizeWidthDisplay, zIndexMidground } from '../../../../shared/ui/styles/sizes';

type LogoContainerProps = {
    toggle: boolean;
};

export const LogoContainer = styled.div<LogoContainerProps>`
    position: fixed;
    top: 0;
    transform: translateX(${(props) => (props.toggle ? '100%' : '0')});
    bottom: 0;
    width: ${mSizePercent};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: ${zIndexMidground + 1};
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    

    @media only screen and (min-width: ${mSizeWidthDisplay}) {
        flex-flow: row;
        justify-content: left;
        z-index: ${zIndexMidground - 1};
        transition: all 800ms cubic-bezier(0.190, 1.000, 0.560, 1.000);
        transition-delay: 200ms;
    }

    & svg {
        position: absolute;
        width: 100%;
        height: auto;
    }
`;
