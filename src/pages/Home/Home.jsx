// import { Outlet } from 'react-router-dom';
import { Image } from './Home.styled';
export default function Home() {
  return (
    <div>
      <p>WELCOME!</p>
      <Image src={require('images/rabbit.jpg')} alt="" />
    </div>
  );
}
