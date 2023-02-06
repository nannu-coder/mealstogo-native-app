import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/typography";
import {
  RestuarentCard,
  RestuarentCardCover,
  Info,
  Section,
  SectionEnd,
  Address,
  Rating,
  Icon,
} from "./restuarent-info.styles";
import { Spacer } from "../../../components/Spacer/Spacer";

const RestuarentInfo = ({ restuarent = {} }) => {
  const {
    name = "Some Restuarent",
    icon = "https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png",
    photos = [
      "https://images.pexels.com/photos/2530386/pexels-photo-2530386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "100 street USA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestuarentCard elevation={5}>
      <RestuarentCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => {
              return <SvgXml key={index} xml={star} width={20} height={20} />;
            })}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="large">
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </Spacer>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left" size="small">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestuarentCard>
  );
};

export default RestuarentInfo;
