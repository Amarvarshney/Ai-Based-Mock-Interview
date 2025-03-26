import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectLayout from "./layouts/protected-layout";
import { MainLayout } from "./layouts/main-layout";

import HomePage from "@/routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignOutPage } from "./routes/sign-out";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockPage } from "./routes/mock-page";
import { MockStart } from "./routes/mock-interview";
import { Feedback } from "./routes/feedback";



const App = () => {
  return (
  
  <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* auth routes*/}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signout/*" element={<SignOutPage />} />
        </Route>

        {/*protected routes*/}
        <Route
          element={
            <ProtectLayout>
              <MainLayout />
            </ProtectLayout>
          }
        >
          {/* ADD ALL THE PROTECT ROUTES  */}
          <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockPage/>}/>
            <Route path="interview/:interviewId/start" element={<MockStart/>}/>
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>  
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
