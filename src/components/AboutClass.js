import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          Welcome to our restaurant Hills. The restaurant that resides in the
          hills for us
          {/* <ProfileClass name="First child" /> */}
          <ProfileClass name="Second Child" />
          {/* <Profile  /> */}
        </div>
      </div>
    );
  }
}

export default AboutClass;
