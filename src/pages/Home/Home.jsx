// import { Outlet } from 'react-router-dom';
import { Wrapper, Image, Title } from './Home.styled';
export default function Home() {
  return (
    <Wrapper>
      <Title>WELCOME, BUDDY!</Title>
      <Image src={require('images/rabbit.jpg')} alt="" />
    </Wrapper>
  );
}
