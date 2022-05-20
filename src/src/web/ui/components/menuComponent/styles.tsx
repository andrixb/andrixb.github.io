import styled from 'styled-components';
import { black, grayDark } from '../../../../shared/ui/styles/colors';
import { lSize, mSize, mSizeWidthDisplay, sSize, xsSize, xxlSize, zIndexMidground } from '../../../../shared/ui/styles/sizes';
import { fontWeightRegular } from '../../../../shared/ui/styles/typography';

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
                    left:0;
                    width: 100%;   
                    opacity: 1; 
                }
            }

            & a {
                color: ${black}
            }
        }
    }
`;
