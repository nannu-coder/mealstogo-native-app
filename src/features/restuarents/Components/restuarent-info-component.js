import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestuarentCard = styled(Card)`
  background-color: #ffffff;
  margin: ${(props) => props.theme.space[3]};
  border-radius: 0;
`;

const RestuarentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #ffffff;
  border-radius: 0;
  overflow: hidden;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SectionEnd = styled.View`
  flex-direction: row;
`;

const RestuarentInfo = ({ restuarent = {} }) => {
  const {
    name = "Some Restuarent",
    icon,
    photos = [
      "https://images.pexels.com/photos/2530386/pexels-photo-2530386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "100 street USA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestuarentCard elevation={5}>
      <RestuarentCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => {
              return <SvgXml key={index} xml={star} width={20} height={20} />;
            })}
          </Rating>
          <SectionEnd>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestuarentCard>
  );
};

export default RestuarentInfo;
