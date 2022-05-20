import styled from 'styled-components';
import { black, grayDark } from '../../../../shared/ui/styles/colors';
import { fontWeightRegular } from '../../../../shared/ui/styles/typography';
import {
    lSize,
    mSize,
    mSizeWidthDisplay,
    sSize,
    xsSize,
    xxlSize,
    zIndexMidground,
} from '../../../../shared/ui/styles/sizes';

export const MenuComponentStyled = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: ${grayDark};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: ${lSize};
    z-index: ${zIndexMidground};

    @media only screen and (min-width: ${mSizeWidthDisplay}) {
        top: auto;
    }

    & ul {
        width: 100%;
        display: flex;
        flex-flow: row;
        list-style-type: none;
        justify-content: space-evenly;

        @media only screen and (min-width: ${mSizeWidthDisplay}) {
            width: 100%;
            justify-content: left;
        }

        & li {
            position: relative;
            text-transform: uppercase;
            font-size: ${mSize};
            font-weight: ${fontWeightRegular};
            margin: ${sSize};
            cursor: pointer;

            &:after {
                content: '';
                position: absolute;
                overflow: hidden;
                border-bottom: 1px solid ${black};
                padding-bottom: ${xsSize};
                width: 0;
                bottom: 0;
                left: 0;
                opacity: 0;
                transition: 0.3s ease-in;
            }

            &:hover {
                &:after {
                    left: 0;
                    width: 100%;
                    opacity: 1;
                }
            }

            & a {
                color: ${black};
            }
        }
    }
`;
