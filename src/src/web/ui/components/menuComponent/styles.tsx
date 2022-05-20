import styled from 'styled-components';
import { black, grayDark, green, orange, white } from '../../../../shared/ui/styles/colors';
import {
    fontWeightBold,
    fontWeightExtraBold,
    fontWeightLight,
    fontWeightRegular,
} from '../../../../shared/ui/styles/typography';
import {
    GOLDEN_RATIO,
    lSize,
    mSize,
    mSizeWidthDisplay,
    sSize,
    xlSize,
    xsSize,
    zIndexForeground,
} from '../../../../shared/ui/styles/sizes';

export const MenuLogoComponent = styled.div`
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid ${orange};
    padding: ${sSize};

    & h5 {
        color: ${black};
        font-size: ${lSize};
        font-weight: ${fontWeightExtraBold};
        text-transform: uppercase;
    }

    & p {
        text-transform: lowercase;
        color: ${white};
        font-size: ${mSize};
    }

    @media only screen and (min-width: ${mSizeWidthDisplay}) {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: ${18 * GOLDEN_RATIO}%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        border-bottom: 3px solid ${orange};

        & h5 {
            font-size: ${lSize};
            font-weight: ${fontWeightLight};
        }

        & p {
            font-size: ${mSize};
        }
    }
`;

export const MenuComponentStyled = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: ${grayDark};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    z-index: ${zIndexForeground};
    padding-left: ${mSize};
    padding-right: ${mSize};
    display: flex;
    display: flex;
    flex-flow: column;

    @media only screen and (min-width: ${mSizeWidthDisplay}) {
        padding: ${lSize};
        top: auto;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    & ul {
        width: 100%;
        display: flex;
        flex-flow: row;
        list-style-type: none;
        justify-content: space-between;
        margin-top:${sSize};

        @media only screen and (min-width: ${mSizeWidthDisplay}) {
            width: 30%;
            justify-content: left;
            margin-top:0;
        }

        & li {
            position: relative;
            margin: ${sSize};
            cursor: pointer;

            &:after {
                content: '';
                position: absolute;
                overflow: hidden;
                border-bottom: 3px solid ${orange};
                padding-bottom: ${xsSize};
                width: 0;
                bottom: -5px;
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
                text-transform: uppercase;
                font-weight: ${fontWeightBold};
                color: ${black};

                @media only screen and (min-width: ${mSizeWidthDisplay}) {
                    font-size: ${mSize};
                    color: ${black};
                }
            }
        }
    }
`;
