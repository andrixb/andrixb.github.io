import { Link } from 'gatsby';
import React from 'react';
import { PageTemplateContainerContent, PageTemplateContainerStyled, PageTemplateHeaderContent, PageTemplateIconBack, PageTemplateParagraphContent } from './styles';

type PageTemplateComponentProps = {
   children?: JSX.Element;
   title?: string;
   contents?: string[];
}

export default function PageTemplateComponent({ children, title, contents }: PageTemplateComponentProps) {
    return (
        <PageTemplateContainerStyled>
            <PageTemplateIconBack><Link to="/">Home Page</Link></PageTemplateIconBack>
            {title ? 
                <PageTemplateHeaderContent>
                    {title}
                </PageTemplateHeaderContent> : <></>}
            <PageTemplateContainerContent>
            { children }
            {contents?.map((content, index) => (
                <PageTemplateParagraphContent key={index}>{content}</PageTemplateParagraphContent>
                ))}
            </PageTemplateContainerContent>
        </PageTemplateContainerStyled>
    );
}
