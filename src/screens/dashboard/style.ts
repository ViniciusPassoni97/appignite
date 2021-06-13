import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 ${RFValue(24)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 5px;
`;
export const User = styled.View`
    margin-left: ${RFValue(17)}px;
`;
export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(24)}px;
`;