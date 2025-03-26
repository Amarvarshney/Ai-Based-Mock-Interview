import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
        <img src="/assets/img/bg.png" 
        className="absolute w-full object-cover opacity-80" 
        alt="" />
        <Outlet />
    </div>
  );
};

export default AuthenticationLayout