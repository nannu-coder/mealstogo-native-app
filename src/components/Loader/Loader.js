import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

const Loader = () => {
  return <Loading animating={true} color={MD2Colors.blue300} size={"large"} />;
};

const Loading = styled(ActivityIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Loader;
