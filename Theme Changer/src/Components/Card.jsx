import React from "react";

function Card({ title, content, imageUrl }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhcmR8ZW58MHx8fHwxNjU1NjY2NjA0&ixlib=rb-1.2.1&q=80&w=400"
          alt="image1"
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Check the above Toggle Theme button to enable darkMode.
        </h5>
      </div>
    </div>
  );
}

export default Card;
