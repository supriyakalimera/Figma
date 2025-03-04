import React from "react";

const experiences = [
  { role: "Lead Product Designer", company: "Fortknox", duration: "Mar 2022 - Oct 2023" },
  { role: "Intern Designer", company: "OmniSafe", duration: "Mar 2022 - Oct 2023" },
  { role: "UI Designer", company: "Doradesign", duration: "Mar 2022 - Oct 2023" },
  { role: "Frontend Developer", company: "OpacityAuthor", duration: "Mar 2022 - Oct 2023" },
];

const ExperienceSection = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">✹ Experience</h2>
      {experiences.map((exp, index) => (
        <>
          <div key={index} className="experience-item">
            <div className="left">{exp.role}</div>
            <div className="right">
              <span className="company">{exp.company}</span>
              <span className="duration">{exp.duration}</span>
            </div>
          </div>
          {index !== experiences.length - 1 && <hr className="divider" />}
        </>
      ))}
    </div>
  );
};

export default ExperienceSection;

/* CSS (Scoped to avoid affecting other components) */
const styles = `
.experience-container {
  background: #121212;
  color: #ffffff;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.experience-heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.experience-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.left {
  font-weight: bold;
  text-align: left;
  flex: 1;
}

.right {
  text-align: right;
  flex: 1;
}

.company, .duration {
  display: block;
  color: #bbb;
}

.divider {
  border: 0;
  height: 1px;
  background: #ffffff;
  margin: 15px 0;
}`;

export const GlobalStyle = () => <style>{styles}</style>;
