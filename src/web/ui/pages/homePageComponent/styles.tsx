import styled from 'styled-components';
import { green, greenLight } from '../../../../shared/ui/styles/colors';
import { lSize } from '../../../../shared/ui/styles/sizes';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-left: ${lSize};
    padding-right: ${lSize};

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${greenLight};
    }
`;
