import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState([]);
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        if (response.status === 200) {
          const data = await response.json();
          setUsers(data.data);
        } else {
          throw new Error("error");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   setSearchValue(users);
  // }, [users]);

  // const filterUsersHandler = (event) => {
  //   const keyword = event.target.value;
  //   if (keyword) {
  //     const result = users.filter((user) =>
  //       user.first_name.toLowerCase().includes(keyword.toLowerCase())
  //     );
  //     setSearchValue(result);
  //   } else {
  //     setSearchValue(users);
  //   }
  // };
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (Id) => {
    if (invites.includes(Id)) {
      setInvites((prev) => prev.filter((id) => id !== Id));
    } else {
      setInvites((prev) => [...prev, Id]);
    }
  };
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          setSuccess={setSuccess}
          onClickInvite={onClickInvite}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          searchValue={searchValue}
          isLoading={isLoading}
          invites={invites}
          // searchValue={searchValue}
          // filterUsershHandler={filterUsersHandler}
        />
      )}
    </div>
  );
}

export default App;
