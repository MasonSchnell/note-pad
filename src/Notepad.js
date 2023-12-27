import React, { useState, useEffect } from "react";
import axios from "axios";

const Notepad = (onNoteAdded) => {
  const [newNote, setNewNote] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: newNote.name,
      };

      const response = await axios.post(
        "http://localhost:3000/api/notes",
        formData
      );

      console.log("Note added:", response.data);

      if (onNoteAdded) {
        onNoteAdded(response.data);
      }
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="inline-block text-center border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-12 p-6 rounded-lg bg-indigo-300"
      >
        <h1 className="text-2xl font-bold mb-4">Name your notepad!</h1>
        <input
          type="text"
          name="name"
          placeholder="Notepad name"
          value={newNote.name}
          onChange={handleInputChange}
          className="block border p-2 mb-4 mx-auto rounded-lg"
        />
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Notepad;
