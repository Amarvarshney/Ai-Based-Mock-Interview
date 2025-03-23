import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectLayout from "./layouts/protected-layout";
import { MainLayout } from "./layouts/main-layout";


import HomePage from "@/routes/home";
import {SignInPage } from "./routes/sign-in";
import {SignOutPage } from "./routes/sign-out";

const App = () => {
  return (
    <Router>
      <Routes>
         {/*public routes*/}
         <Route element ={<PublicLayout/>}>
          <Route index element={<HomePage/>}/>
         </Route>
         {/* auth routes*/}
         <Route element ={<AuthenticationLayout/>}>
          <Route path="/signin/*" element={<SignInPage/>}/>
          <Route path="/signout/*" element={<SignOutPage/>}/>
         </Route>

         {/*protected routes*/}
         <Route element={<ProtectLayout><MainLayout/></ProtectLayout>}>
         
         </Route> 
      </Routes>
    </Router>
  );
  
};

export default App