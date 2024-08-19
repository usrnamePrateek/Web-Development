import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl py-10">Github Finder</h1>
      <p className="text-lg py-2">
        A basic react project to find github users and see information about
        them.
      </p>
      <p className="text-lg">
        It retrieves data about the users via Github API.
      </p>
    </div>
  );
}

export default About;
