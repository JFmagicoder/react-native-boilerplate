import * as React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Atoms, Organisms} from '../../../components';

export default function Notifications({navigation}) {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  return (
    <Container insets={insets}>
      <Organisms.NotificationHeader />
      <CenterView>
        <NoDataImage
          source={require('../../../../assets/images/play-movie.png')}
        />
        <Atoms.H4 color={colors.grey}>您还没有任何收藏呢</Atoms.H4>
      </CenterView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #ffffff;
`;

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NoDataImage = styled.Image`
  margin-bottom: 20px;
`;
