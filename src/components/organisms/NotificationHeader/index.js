import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {H2, H3, Row} from '../../atoms';
import {IconImage} from '../../molecules';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '我的收藏',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '全部课程',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '悦读听书',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1assdfwerer1',
    title: '礼拜中心',
  },
];

const sliderWidth = Dimensions.get('window').width;
const itemWidth = 120;

export default function NotificationHeader() {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <ItemContainer>
        <H2>{item.title}</H2>
        {/* {activeIndex === index ? (
          <H2>{item.title}</H2>
        ) : (
          <H3 color={colors.grey}>{item.title}</H3>
        )} */}
      </ItemContainer>
    );
  };

  return (
    <StyledRow insets={insets} borderColor={colors.grey}>
      <StyledIconImage
        source={require('../../../../assets/images/search.png')}
        size={22}
        style={{tintColor: colors.grey}}
      />
      <Carousel
        data={DATA}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        activeSlideAlignment="start"
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={0.4}
        // onSnapToItem={setActiveIndex}
      />
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.insets.top + 10}px;
  padding-bottom: 10px;
  margin-horizontal: 20px;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.borderColor};
`;

const StyledIconImage = styled(IconImage)`
  margin-right: 14px;
`;

const ItemContainer = styled.View``;
