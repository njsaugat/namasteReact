import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        Welcome to Restaurant Hills. Get Heal while getting a Pill.
        <Profile name="Saugat"/>
        <ProfileClass name="Saugat Poudel"/>
        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default About;
