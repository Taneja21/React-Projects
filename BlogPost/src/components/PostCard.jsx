import React from "react";
import dbService from "../appwrite/db";
import { Link } from "react-router-dom";

function PostCard({ $id, title, image }) {
  console.log("File Preview ::", dbService.getFilePreview(image));
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={dbService.getFilePreview(image)}
            alt="Title Image"
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
