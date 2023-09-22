import React from "react";
import './PaperStack.scss';

const timeSince = (date: Date) => {
  var seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  var years = Math.floor(seconds / 31536000)
  seconds -= years * 31536000;
  var months = Math.floor(seconds / 2592000)

  const monthString = `${months} month${months > 1 ? 's' : ''}`
  if (years === 0) {
    return monthString;
  }

  const yearString = `${years} year${years > 1 ? 's' : ''}`;
  if (months === 0) {
    return yearString;
  }

  return `${yearString}, ${monthString}`;
};

const PaperStack = () => {
  const content = (
    <div className="paper-content">
      <div className="sidebar">
        <div className="title">
          <h1>ARCHIE<br />ADAMS</h1>
          <p>Computer Science Student</p>
        </div>
        <div className="sidebar-content">
          <h2>Skills</h2>
          {/* TODO: Idea: Break skills down into 'hard' language skills and 'soft' alg theory, databases skills */}
          <ul>
            <li>React.js</li>
            <li>TypeScript/JavaScript</li>
            <li>CSS and SCSS/SASS</li>
            <li>C#</li>
            <li>Entity Framework</li>
            <li>ASP.NET</li>
            <li>ASP.NET MVC Framework</li>
            <li>MySQL</li>
            <li>SQL</li>
            <li>Git/Version Control</li>
            <li>HTML</li>
            <li>Full-Stack Development</li>
            <li>Agile Methodologies</li>
            <li>Azure DevOps</li>
            <li>Postman API</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Software Development</li>
            <li>Algorithms Theory</li>
            <li>Databases</li>
            <li>Project Management</li>
            <li>Google Apps Script</li>
          </ul>
          <h2>Education</h2>
          <h3>Degree</h3>
          <p>2020-2024</p>
          <p>Computer Science, BSc. from the University of Leeds</p>
          <p>Currently in final year, on track for a first</p>
          <h3>A-Levels</h3>
          <p>2018-2020</p>
          <p>Computer Science, Maths, IT</p>
          <p>A*AA</p>
        </div>
      </div>
      <div className="main">
        <h2>Profile</h2>
        <p>
          I am a hardworking and motivated Computer Science student aspiring to become a software developer. I am
          inquisitive by nature, constantly seeking to expand my knowledge, understand new technologies and broaden my
          experience in the field.
        </p>

        <h2>Professional Experience</h2>

        <div className="work-header">
          <h3>PwC - Software Developer</h3>
          <p>June 2022 - Present ({timeSince(new Date('2022-06-01'))})</p>
          <p>Leeds, England, United Kingdom</p>
        </div>

        <p>I'm part of an agile development team within PwC Deals UK, working as a fullstack developer. Although this role is part of a full-time placement year within my degree sponsorship, I take on the workload of a standard graduate role, using React, Typescript, Bootstrap and SCSS for frontend development, and C# with .NET along with Entity Framework and MySQL databases for the backend. I have also became familiar with the tools used by the team during development like Postman, Azure DevOps and SQL Server Management Studio.</p>

        <div className="work-header">
          <h3>PwC - Low Code Developer</h3>
          <p>June 2021 - August 2021 (3 Months)</p>
          <p>London, England, United Kingdom</p>
        </div>
        <ul>
          <li>Development in Google Apps Script to automate report generation.</li>
          <li>Developing an app with Microsoft Power Platform to collect large amounts of data and generate reports.</li>
          <li>Achieved Alteryx Designer Core Certification.</li>
          <li>Presenting and demoing projects to the team and senior stakeholders.</li>
        </ul>

        <div className="work-header">
          <h3>Plusnet - Software Developer Intern</h3>
          <p>July 2019 (1 Month)</p>
          <p>Sheffield, England, United Kingdom</p>
        </div>
        <ul>
          <li> Programming in java </li>
          <li> Using Selenium to make automated tests</li>
          <li> Using git for project source control </li>
          <li> Using IntelliJ IDEA for development</li>
          <li> Following agile programming practices </li>
          <li> Shadowing experienced developers</li>
          <li> Using Jira ticketing system</li>
        </ul>

        {/* TODO: Make this a link where more paper slides out to the right with all my work history in detail on there. */}
        {/* <button>See More...</button> */}
      </div>
    </div>
  );

  // TODO: Some sort of back page with hobbies and interests?
  //  - Goals and targets?
  //  - Awards
  //  - Certificates pile or folder perhaps?
  //  - 

  const sheet = <div className="paper">{content}</div>;

  return (
    <div className="paperStack">
      {sheet}
      {sheet}
      {sheet}
    </div>
  );
};

export default PaperStack;
