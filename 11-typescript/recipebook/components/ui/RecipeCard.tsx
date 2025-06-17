"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/features/recipeSlice";
import { toast } from "react-toastify";
import React from "react";
import { Recipe } from "@/lib/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
  onViewDetails?: () => void;
};

const RecipeCard = ({ recipe, onViewDetails }: RecipeCardProps) => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(
    (state: any) => state.recipes.favoriteRecipes
  );
  const isFavorite = favoriteRecipes.some((r: any) => r.id === recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation(); // stop bubbling to Link
    dispatch(toggleFavorite(recipe));
    if (isFavorite) {
      toast.info("Removed from favorites", {
        autoClose: 500, // close after 1.5 seconds
        hideProgressBar: true, // hide progress bar
        pauseOnHover: false, // don't pause on hover
        closeOnClick: true,
        draggable: false,
        style: {
          fontSize: "0.8rem",
          padding: "8px 12px",
          minWidth: "200px",
        },
      });
    } else {
      toast.success("Added to favorites!", {
        autoClose: 500,
        hideProgressBar: true,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: false,
        style: {
          fontSize: "0.8rem",
          padding: "8px 12px",
          minWidth: "200px",
        },
      });
    }
  };

  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative"
    >
      {/* Recipe Image */}
      <img
        className="w-full h-48 object-cover rounded-t-2xl"
        src={recipe.image}
        alt={recipe.name}
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {recipe.name}
        </h2>
        {/* Meta Info: Time and Servings */}
        <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-4">
          {/* Total Time */}
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins total
          </span>

          {/* Servings */}
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            {recipe.servings} servings
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault(); // prevent link navigation for this button
            if (onViewDetails) onViewDetails();
          }}
          className="cursor-pointer mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition duration-200"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default RecipeCard;
