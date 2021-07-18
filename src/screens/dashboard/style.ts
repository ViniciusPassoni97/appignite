import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import {FlatList} from 'react-native';
import { DataListPros } from './index';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight() + RFValue(24)}px;
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

export const Highlights = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transitions = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;

`; 
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${RFValue(15)}px;
`;

export const List = styled(FlatList as new () => FlatList<DataListPros>).attrs({
    showsVerticalScrollIndicator:false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``;