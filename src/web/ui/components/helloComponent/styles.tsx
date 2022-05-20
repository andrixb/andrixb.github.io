import styled from 'styled-components';
import { black, grayDark, green, orange } from '../../../../shared/ui/styles/colors';
import { mSizePercent, mSizeWidthDisplay, xlSizePercent, xxlSizePercent, zIndexMidground } from '../../../../shared/ui/styles/sizes';
import { fontWeightBold } from '../../../../shared/ui/styles/typography';

type HelloContainerProps = {
    toggle: boolean;
};

export const HelloContainer = styled.div<HelloContainerProps>`
    position: fixed;
    top: 0; 
    bottom: 0; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: ${zIndexMidground + 1};

    @media only screen and (min-width: ${mSizeWidthDisplay}) {
        flex-flow: row;
        justify-content: left;
        align-items: center;
        z-index: ${zIndexMidground - 1};
        transform: translateY(${(props) => (props.toggle ? '-15%' : '0')});
        transition: all 800ms cubic-bezier(0.19, 1, 0.56, 1);
        transition-delay: 200ms;
    }

    & p {
        font-size: 1140%;
        font-weight: ${fontWeightBold};
        color: ${black};

        & span {
            color: ${orange};
        }
    }
`;
