import React, { useState } from "react";
import "./index.css";

const AddProject = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProject = () => {
    if (!projectName || !projectLink || !description) {
      alert("Please fill in all the fields.");
      return;
    }

    const newProject = {
      projectName,
      projectLink,
      description,
    };

    onAddProject(newProject);

    setProjectLink("");
    setDescription("");
  };

  return (
    <div>
      <h1 className="project-heading">Add Project</h1>
      <div className="add-con">
        <label htmlFor="projectname" className="label-title">
          Project Name
        </label>
        <input
          type="text"
          id="projectname"
          className="input-width"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <label htmlFor="projectlink" className="label-title1">
          Project Link
        </label>
        <input
          type="text"
          id="projectlink"
          className="input-width"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <label htmlFor="description" className="label-title2">
          Description
        </label>
        <textarea
          className="desc-width"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="add-btn" onClick={handleAddProject}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProject;
