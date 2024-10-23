import React, { useState, useEffect } from "react";

export default function GetInTouch() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-[600px] h-auto p-8 rounded-md border border-white  ">
        <h2 className="text-center font-bold text-[30px] text-white mb-6">
          GET IN TOUCH
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-white font-medium">First Name</label>
            <input
              className="p-2 border border-gray-300 rounded-md"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium">Last Name</label>
            <input
              className="p-2 border border-gray-300 rounded-md"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium">Email</label>
            <input
              className="p-2 border border-gray-300 rounded-md"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium">Phone Number</label>
            <input
              className="p-2 border border-gray-300 rounded-md"
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium">Comment</label>
            <input
              className="p-2 h-[100px] border border-gray-300 rounded-md"
              type="text"
              name="comment"
              placeholder="Comment"
              onChange={handleForm}
            />
          </div>
          <input
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-700"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
