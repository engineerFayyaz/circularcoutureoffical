import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";

const RegisteredUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://localhost:7220/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="container-fluid">
        {/* <div className="row"> */}
        <div className="row text-light" style={{ backgroundColor: "black", color: "white" }}>
          <div className="col-md-3">
            <AdminSideHeader />
          </div>
          <div className="col-md-9">
            <h1 className="my-4" style={{color:'white'}}>Registered Users</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.city}</td>
                    <td>{user.zipCode}</td>
                    <td>{user.state}</td>
                    <td>{user.country}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.mobileNumber}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default RegisteredUser;
