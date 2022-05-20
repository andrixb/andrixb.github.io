import styled from 'styled-components';
import { green } from '../../../../shared/ui/styles/colors';
import { mSizePercent, zIndexMidground } from '../../../../shared/ui/styles/sizes';

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
    transition: all 800ms cubic-bezier(0.190, 1.000, 0.560, 1.000);
    transition-delay: 200ms;

    // background-color: ${(props) => (props.toggle ? 'red' : 'green')};

    & svg {
        position: absolute;
        width: 100%;
        height: auto;
    }
`;
