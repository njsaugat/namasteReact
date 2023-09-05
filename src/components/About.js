import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        Welcome to our restaurant Hills. The restaurant that resides in the
        hills for us
        <Profile name="Saugat"/>
        <ProfileClass name="Saugat Poudel"/>
        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default About;
