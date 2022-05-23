import React from 'react';
import GlobalStyledLayout from '../../../../shared/ui/styles';
import { useDetectMobile } from '../../../infrastructure/hooks/useDetectMobile';
import PageTemplateComponent from '../pageTemplateComponent';

export type AboutPageComponentProps = {};

export default function  AboutPageComponent() {
    const { isMobile } = useDetectMobile();

    const title = 'About me...';
    const contents = [
        `I went into development moved by the idea of seeing a computer as a brain I could program and tell it doing hard tasks. Eventually, I moved my attention to communication and how I could improve the way we can connect and interact on the web.

       In my professional experience, I've worked on a few projects designing, leading and developing scalable applications from scratch using mainly React and Typescript. My latest projects are based on ReactJS with SSR (Next.js). Also, I've got experience with the AWS Lambda service which I used for backend services for a legal trust service project. I like very much tackling tasks where I need to find out innovative solutions: among the projects I worked on, the development and the migration of a platform to micro-frontend architecture with ReactJS has been the one I enjoyed the most. It was one of the first professional apps on the market with that architecture.`,
       
       `My approach is based on a "holistic" view of the domain problem. Solutions take into account the business needs, the team size, and all the factors that may rise up during all the phases of the project.`,
       
       `Being a creative mind, I love building things up while enjoying the ride.`,
    ];


    return (
        <GlobalStyledLayout>
           <PageTemplateComponent title={title} contents={contents}>
            <a href="">Download Resume</a>   
            </PageTemplateComponent>
        </GlobalStyledLayout>
    );
}
