import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    // console.log("props", props);
    super(props);
    this.state = {
      views: 0,
      user: {},
    };
    console.log("child constructor", props.name);
  }
  interval;
  async componentDidMount() {
    this.interval=setInterval(() => console.log("hello"), 1000);
    console.log("child component did mount", this.props.name);
    const data = await fetch("https://api.github.com/users/njsaugat");
    const userData = await data.json();
    console.log(userData);
    this.setState({
      user: userData,
    });
    // this.setState({ views: 1 });
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("component unmounted");
  }
  render() {
    console.log("child render", this.props.name);
    return (
      <div>
        <h1>This is profile Class Component</h1>
        <img src={this?.state?.user?.avatar_url} alt="profile Image" />
        <h2>{this?.state?.user?.login}</h2>
        <h2>{this?.state?.user?.name}</h2>
        <h2>{this?.state?.user?.location}</h2>
        <h3>{this?.state?.views} views</h3>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                views: prevState.views + 1,
              };
            });
          }}
        >
          Increse View
        </button>
      </div>
    );
  }
}
export default ProfileClass;
