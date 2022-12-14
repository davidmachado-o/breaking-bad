import React from "react";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Breaking Bad Characters</h1>
      <CharacterList />
    </div>
  );
}

export default App;
