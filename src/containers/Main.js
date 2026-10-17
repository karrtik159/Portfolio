import React, {Suspense, lazy} from "react";
import classNames from "classnames";
import Header from "../components/header/Header";
import MouseGradient from "../components/mouseGradient/MouseGradient";
import Greeting from "./greeting/Greeting";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Practice = lazy(() => import("./practice/Practice"));
const HowIWork = lazy(() => import("./howIWork/HowIWork"));
const Focus = lazy(() => import("./focus/Focus"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Skills = lazy(() => import("./skills/Skills"));
const Education = lazy(() => import("./education/Education"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Profile = lazy(() => import("./profile/Profile"));
const ScrollToTopButton = lazy(() => import("./topbutton/Top"));

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={classNames("app-shell", {"dark-mode": isDark})}>
      <MouseGradient />
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Suspense fallback={null}>
          <Practice />
          <HowIWork />
          <Focus />
          <WorkExperience />
          <StartupProject />
          <Skills />
          <div className="foundation-grid">
            <Education />
            <Achievement />
          </div>
          <Profile />
          <ScrollToTopButton />
        </Suspense>
      </StyleProvider>
    </div>
  );
};

export default Main;
