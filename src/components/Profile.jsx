import React, { useEffect, useState } from "react";
import Card from "./Card";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("all");
  const [active, setActive] = useState("all");
  const switching = () => {
    
  }
  useEffect(
    () => () => {
      const fetchedUsers = async () => {
        try {
          const res = await fetch("https://randomuser.me/api/?results=10");
          const data = await res.json();
          setUsers(data.results);
          console.log(data.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchedUsers();
    },
    []
  );
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center space-y-6 space-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full h-20 flex items-center justify-center space-x-5">
          <button onClick={() => setGender("all")} className={gender === "all" ? 'w-14 rounded bg-blue-600 h-8 hover:bg-blue-400' : 'w-14 rounded bg-gray-100 h-8 hover:bg-gray-200'}>All</button>
          <button onClick={() => setGender("male")} className={gender === "male" ? 'w-14 rounded bg-blue-600 h-8 hover:bg-blue-400' : 'w-14 rounded bg-gray-100 h-8 hover:bg-gray-200'}>Male</button>
          <button onClick={() => setGender("female")} className={gender === "female" ? 'w-14 rounded bg-blue-600 h-8 hover:bg-blue-400' : 'w-14 rounded bg-gray-100 h-8 hover:bg-gray-200'}>Female</button>
        </div>
        {gender === "all" &&
          users.map((user) => (
            <Card
              key={user.login.uuid}
              image={user.picture.large}
              name={user.name.first + " " + user.name.last}
              location={user.location.country}
              age={user.dob.age}
            />
          ))}
        {gender === "male" &&
          users
            .filter((user) => user.gender === "male")
            .map((user) => (
              <Card
                key={user.login.uuid}
                image={user.picture.large}
                name={user.name.first + " " + user.name.last}
                location={user.location.country}
                age={user.dob.age}
              />
          ))}
        {gender === "female" &&
          users
            .filter((user) => user.gender === "female")
            .map((user) => (
              <Card
                key={user.login.uuid}
                image={user.picture.large}
                name={user.name.first + " " + user.name.last}
                location={user.location.country}
                age={user.dob.age}
              />
          ))}
      </div>
    </div>
  );
};

export default Profile;
