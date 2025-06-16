"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/features/recipeSlice";
import { toast } from "react-toastify";
import React from "react";

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
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(
    (state: any) => state.recipes.favoriteRecipes
  );
  const isFavorite = favoriteRecipes.some((r: any) => r.id === id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation(); // stop bubbling to Link
    dispatch(toggleFavorite({ id, title, image }));
    if (isFavorite) {
      toast.info("Removed from favorites");
    } else {
      toast.success("Added to favorites!");
    }
  };

  return (
    <Link
      href={`/recipes/${id}`}
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative"
    >
      {/* Recipe Image */}
      <img
        className="w-full h-48 object-cover rounded-t-2xl"
        src={image}
        alt={title}
      />

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={`cursor-pointer absolute top-3 right-3 p-2 rounded-full shadow-md transition-colors ${
          isFavorite
            ? "bg-red-100 text-red-600"
            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={isFavorite ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <button
          onClick={(e) => {
            e.preventDefault(); // prevent link navigation for this button
            if (onViewDetails) onViewDetails();
          }}
          className="cursor-pointer mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition duration-200"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default RecipeCard;
