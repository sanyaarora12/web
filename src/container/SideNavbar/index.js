import React, { useState } from "react";
import data from "../../helpers/data.json";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./style.scss";

const SideNavbar = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [icon, setIcon] = useState(true);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const onDescriptionClick = (description) => {
    if (selectedDescription === description) {
      setSelectedDescription(null);
    } else {
      setSelectedDescription(description);
    }
  };

  const handleNameClick = (name) => {
    if (selectedName === name) {
      setSelectedName(null);
      setIcon(true);
    } else {
      setSelectedName(name);
      setIcon(false);
    }
  };

  return (
    <div>
      <div className="side-navbar">
        {data.courses.map((course) => (
          <div key={course.id}>
            <h4
              className="sub-container"
              onClick={() => handleNameClick(course.name)}
            >
              {course.id}. {course.name}
              <div key={course.id}>
                {icon === true ? (
                  <span>
                    <KeyboardArrowDownIcon className="key-icon" />
                  </span>
                ) : (
                  <span>
                    <KeyboardArrowUpIcon className="key-icon" />
                  </span>
                )}
              </div>
            </h4>
            {selectedName === course.name && (
              <div className="description">
                <p className="icon">
                  <PlayCircleOutlineIcon />
                </p>
                <p onClick={() => onDescriptionClick(course.description)}>
                  {course.description}
                </p>
                {selectedDescription === course.description && (
                  <div className="video-container">
                    <video controls width="820" height="340">
                      <source src={course.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        {/* <h4>Thankyou for watching our videos!</h4> */}
      </div>
    </div>
  );
};

export default SideNavbar;
