'use client'; // Add this line to mark the component as client-side

import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [Maintask, setMaintask] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMaintask([...Maintask, { title, desc }]);

    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...Maintask];
    copytask.splice(i, 1);
    setMaintask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (Maintask.length > 0) {
    renderTask = Maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-4">
          <div className="flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 p-5 rounded-lg shadow-lg w-2/3">
            <h5 className="text-xl font-semibold text-white hover:text-gray-200 transition-all duration-300">{t.title}</h5>
            <h6 className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-300">{t.desc}</h6>
          </div>

          <button
            onClick={() => deleteHandler(i)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center w-2/3 mb-5">MY Todo List</h1>

      <form onSubmit={handleSubmit} className="w-2/3 mb-6">
        <input
          type="text"
          className="w-full text-black border-zinc-800 border-4 px-4 py-2 mb-4"
          placeholder="Enter Task Here"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          className="w-full text-black border-zinc-800 border-4 px-4 py-2 mb-4"
          placeholder="Enter Description Here"
          value={desc}
          onChange={handleDescChange}
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 focus:outline-none"
        >
          Add Task
        </button>
      </form>

      <hr className="w-2/3 mb-6" />

      <div className="p-5 bg-slate-200 w-2/3">
        <ul className="w-full">
          {renderTask}
        </ul>
      </div>
    </div>
  );
};

export default page;
