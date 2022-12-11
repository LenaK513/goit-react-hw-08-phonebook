import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <img src="../images/rabbit.jpg" alt="" />
      <Outlet />
    </div>
  );
}
