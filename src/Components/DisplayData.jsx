"use client";

import { Button, Table } from "flowbite-react";
import { useState } from "react";
import { AddNewUser } from "./AddNewUser";

export function DisplayData(props) {
  const { data, setData } = props;

  const [openModal, setOpenModal] = useState(false);
  const handleDelete = (id) => {
    const filtered = data.filter((d, i) => i !== id);

    setData(filtered);
  };
  const handleShow  = (id)=>{
    const find  = data.find((d,i)=>i  ===  id)
    console.log(find)
    let allskills = ''
    find.skills.forEach((skill)=>{
        allskills += skill + " "
    })

    alert(allskills)
  }
  return (
    <div className="overflow-x-auto w-full  h-screen">
      <div className="max-w-[1000px] m-auto mt-32 w-full">
        <div className="flex justify-end items-center mb-3">
          <Button onClick={() => setOpenModal(true)} className="">
            Add New User
          </Button>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>UserId</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Skills</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.length > 0 ? (
              data.map((user, index) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user.userId}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user.username}
                    </Table.Cell>
                    {console.log("user", user)}
                    <Table.Cell>
                      {2024 - new Date(user.birthDate).getFullYear()}
                    </Table.Cell>
                    <Table.Cell>{user.address}</Table.Cell>
                    <Table.Cell>{user.gender}</Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                 

                    <Table.Cell>
                      <div className="" onClick={() => handleShow(index)}>
                        <div className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                          show
                        </div>
                      </div>
                    </Table.Cell>

                    <Table.Cell>
                      <div className="" onClick={() => handleDelete(index)}>
                        <div className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                          Delete
                        </div>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row>
                <Table.Cell colSpan={10}>
                  <div className="flex justify-center items-center  w-full">
                    User Not Found
                  </div>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <AddNewUser
        data={data}
        setData={setData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
