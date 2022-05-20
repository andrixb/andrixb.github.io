import styled from 'styled-components';
import { black, grayGreen, orange, white } from '../../../../shared/ui/styles/colors';
import { GOLDEN_RATIO, xxlSize } from '../../../../shared/ui/styles/sizes';
import { fontWeightBold, fontWeightLight } from '../../../../shared/ui/styles/typography';

export const HeroComponentStyled = styled.div`
    width: 100%;
    height: ${2 * GOLDEN_RATIO}vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    padding-left: ${xxlSize};
    padding-right: ${xxlSize};
    background-color: ${white};

    & footer > small {
        color: ${black};
        opacity: 1;
        font-weight: ${fontWeightLight};
        text-transform: lowercase;
    }
`;
