import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../SharedComponents/Loading/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <table className="container w-100 table table-hover table-responsive">
      <thead className="container">
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow
            key={user._id}
            index={index}
            user={user}
            refetch={refetch}
          ></UserRow>
        ))}
      </tbody>
    </table>
  );
};

export default MakeAdmin;
