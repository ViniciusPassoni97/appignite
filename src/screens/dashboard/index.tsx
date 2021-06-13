import React from 'react';
import { Highlight } from '../../components/Highilight';
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon
} from './style';

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/43391455?v=4.png' }} />
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>
                            <UserName>
                                Vinícius
                            </UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
            <Highlight />
        </Container>
    )
}
