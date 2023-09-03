import {useEffect, useState} from 'react'
const Profile = ({ name }) => {
  const [counter,setCounter]=useState(0)
  console.log('renderAgain')
  useEffect(() => {
    let interval=setInterval(() => {
      console.log('useEffect')
      
    },1000)

    return () => {
      clearInterval(interval)
      console.log('use effect return')
    }
  })
  console.log('render');
  return (
    <div>
      <h2>This is profile Functional Component</h2>
      <h3>{ name}</h3>
      <h3>{ counter}</h3>
      <button onClick={() => {
        setCounter((prevCount)=>prevCount+1)
      }}>Count</button>
    </div>
  );
};

export default Profile;