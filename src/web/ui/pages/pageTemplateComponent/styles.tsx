import styled from 'styled-components';
import { black, grayGreen, green, greenLight, orange } from '../../../../shared/ui/styles/colors';
import { lSize, zIndexForeground } from '../../../../shared/ui/styles/sizes';

export const PageTemplateContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flext-start;
    justify-content: flex-start;
    padding-left: ${lSize};
    padding-right: ${lSize};
`;

export const PageTemplateIconBack = styled.div`
    z-index: ${zIndexForeground + 1};
    & a {
        color: ${black};
    }
`;

export const PageTemplateHeaderContent = styled.h1`
    position: fixed;
    top: 0;
    left: 0;
    color: ${grayGreen};
    z-index: ${zIndexForeground};
    width: 100%;
    background-color: ${greenLight};
    padding: ${lSize};
    color: ${orange};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const PageTemplateContainerContent = styled.div`
    margin-top: 116px;
`;

export const PageTemplateParagraphContent = styled.p`
    color: ${black};
    z-index: ${zIndexForeground};
`;
