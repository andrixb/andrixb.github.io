import styled from 'styled-components';
import { black, grayDark, green, orange } from '../../../../shared/ui/styles/colors';
import { lSize, mSize, mSizeWidthDisplay, sSize, xlSize, xsSize, xxlSize, zIndexMidground } from '../../../../shared/ui/styles/sizes';
import { fontWeightLight } from '../../../../shared/ui/styles/typography';

export const MenuComponentStyled = styled.div`
    position: fixed;
    width: 100%;
    background-color: ${grayDark};
    padding: ${lSize};
    z-index: ${zIndexMidground};

    & ul {
        width: ${xxlSize};
        display: flex;
        flex-flow: column;
        list-style-type: none;

        @media only screen and (min-width: ${mSizeWidthDisplay}) {
            width: 100%;
            flex-flow: row;
            justify-content: left;
        }

        & li {
            position: relative;
            text-transform: uppercase;
            font-size: ${mSize};
            font-weight: ${fontWeightLight};
            margin: ${sSize};
            cursor: pointer;

            &:after {
                content: '';
                position: absolute;
                overflow: hidden;
                border-bottom: 1px solid ${black};
                transition: all 0.3s ease-out;
                width: 0;
                top: 100;
                left: 100;
            }

            &:hover {
                &:after {
                    top: 0;
                    left:0;
                    bottom: 0;
                    width: 100%;;
                    padding-bottom: ${xsSize};
                }
            }
        }
    }
`;
