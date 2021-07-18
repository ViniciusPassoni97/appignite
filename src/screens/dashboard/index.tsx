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
    Icon,
    Highlights,
    Transitions,
    Title,
    List
} from './style';

import { TransitionCard, TransitionCardProps } from '../../components/TransactionCard'

export interface DataListPros extends TransitionCardProps {
    id: string;
}

export default function Dashboard() {
    const dataList: DataListPros[] = [{ 
        id: '1',
        type: 'positive',
        title: 'Desenvolvimento de Site',
        amount: 'R$ 14.000,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '13/04/2021',
    },
    {
        id: '2',
        type: 'negative',
        title: 'Hamburgueria Pizzy',
        amount: 'R$ 59,00',
        category: {
            name: 'Alimentação',
            icon: 'coffee',
        },
        date: '13/04/2021',
    },
    {
        id: '3',
        type: 'negative',
        title: 'Aluguel do Apartamento',
        amount: 'R$ 1.200,00',
        category: {
            name: 'Casa',
            icon: 'shopping-bag',
        },
        date: '13/04/2021',
    }];

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
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <Highlights>
                <Highlight type="up" title="Entradas" amount="R$ 17.400,00" lastTransition="Última entrada dia 16 de abril" />
                <Highlight type="down" title="Saídas" amount="R$ 4.000,00" lastTransition="Última entrada dia 16 de abril" />
                <Highlight type="total" title="Total" amount="R$ 13.400,00" lastTransition="Última entrada dia 16 de abril" />
            </Highlights>
            <Transitions>
                <Title>Listagem</Title>
                <List
                    data={dataList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransitionCard data={item} />}
                />
            </Transitions>
        </Container>
    );
};
