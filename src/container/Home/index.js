import React, { useState } from "react";
import data from "../../helpers/data.json";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.scss";

const Home = () => {
  const [selectedName, setSelectedName] = useState(null);

  const handleNameClick = (name) => {
    if (selectedName === name) {
      setSelectedName(null);
    } else {
      setSelectedName(name);
    }
  };

  return (
    <div className="side-navbar">
      {data.courses.map((course) => (
        <div key={course.id}>
          <h4
            className="sub-container"
            onClick={() => handleNameClick(course.name)}
          >
            {course.id}. {course.name}
          </h4>
          {selectedName === course.name && (
            <div className="description">
              <p className="icon">
                <PlayCircleOutlineIcon />
              </p>
              <p>{course.description}</p>
            </div>
          )}
          {/* <video controls>
            <source src={course.videoUrl} type="video/mp4" />
          </video> */}
        </div>
      ))}
      <h4>Thankyou for watching our videos!</h4>
    </div>
  );
};

export default Home;
