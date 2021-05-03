import * as React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Atoms, Organisms} from '../../../components';

export default function Blank({navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <Organisms.Header />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #ffffff;
`;

const Button = styled.Button``;
