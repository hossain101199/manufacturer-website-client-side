import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="w-25">{email}</td>
      <td className="w-50">
        {role !== "admin" && (
          <>
            <p>User</p>
            <button onClick={makeAdmin} className="btn btn-xs ">
              Make Admin
            </button>
          </>
        )}
        {role === "admin" && <span>Admin</span>}
      </td>
    </tr>
  );
};

export default UserRow;
