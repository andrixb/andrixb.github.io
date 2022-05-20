import React, { useState } from 'react';
import GlobalStyledLayout from '../../../../shared/ui/styles';
import { useDetectMobile } from '../../../infrastructure/hooks/useDetectMobile';
import HeroComponent from '../../components/footerComponent';
import { HelloComponent } from '../../components/helloComponent';
import MenuComponent from '../../components/menuComponent';
import { HomePageContainer } from './styles';

export type HomePageComponentProps = {};

export default function HomePageComponent() {
    const { isMobile } = useDetectMobile();
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <GlobalStyledLayout>
            <HomePageContainer>
                <MenuComponent setInteracted={setToggle} />
                <HelloComponent toggle={toggle} />
                <HeroComponent />
            </HomePageContainer>
        </GlobalStyledLayout>
    );
}
