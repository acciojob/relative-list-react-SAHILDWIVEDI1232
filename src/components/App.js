import React from "react";

const App = () => {
  // define relatives array
  const relatives = ["Ramesh", "Suresh", "Priya", "Anita"];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      {/* Ordered List with key "relativeList" */}
      <ol key="relativeList">
        {relatives.map((name, index) => (
          // Each list item gets a unique key using the naming pattern
          <li key={`relativeListItem${index + 1}`}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
