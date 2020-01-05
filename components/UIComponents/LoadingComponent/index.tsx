import styled from "styled-components";

interface IProps {
  isLoading: boolean;
  children: React.ReactChild;
}

const LoadingComponent: React.FC<IProps> = props => {
  const { isLoading, children } = props;
  if (isLoading) {
    <Container></Container>;
  } else {
    return <>{children}</>;
  }
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: "red";
`;

export default LoadingComponent;
