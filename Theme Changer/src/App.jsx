import { useState } from "react";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";

function App() {
  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card
              title="theme changer"
              content="This is a simple card component created with React and styled using Tailwind CSS. Check the above Toggle Theme button to enable dark mode"
              imageUrl="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhcmR8ZW58MHx8fHwxNjU1NjY2NjA0&ixlib=rb-1.2.1&q=80&w=400"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
