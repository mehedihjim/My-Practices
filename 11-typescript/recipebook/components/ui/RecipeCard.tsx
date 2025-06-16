"use client";

import Link from "next/link";

type RecipeCardProps = {
  title: string;
  id: number;
  imageUrl: string;
  onViewDetails?: () => void;
};

const RecipeCard = ({
  id,
  title,
  imageUrl,
  onViewDetails,
}: RecipeCardProps) => {
  return (
    <Link
      href={`/recipes/${id}`}
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
    >
      {/* Recipe Image */}
      <img
        className="w-full h-48 object-cover rounded-t-2xl"
        src={imageUrl}
        alt={title}
      />

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <button
          onClick={onViewDetails}
          className="cursor-pointer mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition duration-200"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default RecipeCard;
