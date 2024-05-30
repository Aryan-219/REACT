import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const x = [
  {
    name: "JavaScript",
    level: "advanced",
    color: "blue",
  },
  {
    name: "Java",
    level: "advanced",
    color: "yellow",
  },
  {
    name: "Bootstrap",
    level: "beginner",
    color: "red",
  },
  {
    name: "C++",
    level: "intermediate",
    color: "lightblue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="profile.jpg" alt="profile" height="px" width="443px" />;
}
function Intro() {
  return (
    <div>
      <h1>Aryan Agrawal</h1>
      <p>
        Hello There. My name is Aryan Agrawal and I am a web developer. I am
        currently learning MERN stack and I am hands on with the Java full
        stack. Thankyou for reading :)
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <>
      <div className="skill-list">
        {x.map((skill) => (
          <Skill name={skill.name} level={skill.level} color={skill.color} />
        ))}
      </div>
      {/* <div className="skill-list" >
      <Skill name="JavaScript " emoji="😊" color="#123456" />
      <Skill name="Java " emoji="😁" color="orangered"/>
      <Skill name="Bootsrap " emoji="💥" color="yellow"/>
    </div> */}
    </>
  );
}
function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <h5>{name} </h5>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
