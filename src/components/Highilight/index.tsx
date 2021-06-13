import React from 'react';
import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransition
} from './style';

export const Highlight = () => {
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name='arrow-up-circle' />
            </Header>
            <Footer>
                <Amount>R$ 5700,00</Amount>
                <LastTransition>Última entrada dia 13 de abril</LastTransition>
            </Footer>
        </Container>
    );
}