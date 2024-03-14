import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  //   console.log(friends);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div className="box">
      <h3>Friend: {friends.length}</h3>

      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}