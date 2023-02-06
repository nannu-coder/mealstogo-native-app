import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";

export const RestuarentCard = styled(Card)`
  background-color: #ffffff;
  margin-bottom: ${(props) => props.theme.space[3]};
  border-radius: 0;
`;

export const RestuarentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #ffffff;
  border-radius: 0;
  overflow: hidden;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
