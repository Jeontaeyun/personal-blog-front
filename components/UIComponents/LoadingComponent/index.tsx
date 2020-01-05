import styled from "styled-components";

interface IProps {}

const LoadingComponent: React.FC<IProps> = props => {
  return <Container />;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: "red";
`;

export default LoadingComponent;
