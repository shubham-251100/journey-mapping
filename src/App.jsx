import { useState } from "react";

import logo from "./assets/logo.svg";
import background from "./assets/background.svg";

import { StepsProgress } from "./components/StepsProgress";
import { JourneyMap } from "./components/JourneyMap";

import "./App.css";

const journey = [
  {
    id: 1,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "upcoming",
  },
  {
    id: 2,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "completed",
  },
  {
    id: 3,
    title: "Powers of AI",
    skills: ["AI Fundamentals"],
    status: "completed",
  },
  {
    id: 4,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "completed",
  },
];

const journeyNew = [
  {
    id: 5,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "completed",
  },
  {
    id: 6,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "current",
  },
  {
    id: 7,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "upcoming",
  },
  {
    id: 8,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "upcoming",
  },
  {
    id: 9,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "upcoming",
  },
  {
    id: 10,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    status: "upcoming",
  },
];

function App() {
  const [journeyData, setJourneyData] = useState(journey);
  const [progress, setProgress] = useState(0);

  const handleProgress = (index) => {
    setProgress(index);
  };

  const addNewJourney = () => {
    if (journeyData.length === 10) return;
    setJourneyData((pre) => [...pre, journeyNew[pre.length - journey.length]]);
  };

  return (
    <div className="app-container">
      <img src={background} className="background-svg" alt="background" />
      <div className="content-wrapper">
        <main className="main-content">
          <header className="app-header">
            <img
              src={logo}
              className="logo-image"
              alt="Saras AI Institute"
              onClick={addNewJourney}
            />
          </header>
          <StepsProgress totalSteps={journeyData.length} completed={progress} />
          <JourneyMap
            journeyData={journeyData}
            progress={progress}
            handleProgress={handleProgress}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
