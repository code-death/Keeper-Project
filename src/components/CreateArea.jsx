import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((preV) => {
      return {
        ...preV,
        [name]: value
      };
    });
  }
  function handleClick(e) {
    e.preventDefault();
    setNewNote({
      title: "",
      content: ""
    });
    props.onAdd(newNote);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
