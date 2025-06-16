"use client";
import RecipeDetailSkeleton from "@/components/ui/RecipeDetailsSkeleton";
import { toggleFavorite } from "@/lib/features/recipeSlice";
import { Recipe } from "@/lib/types/recipe";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type RecipeDetailProps = {
  params: { id: string };
};

export default function RecipeDetail({ params }: RecipeDetailProps) {
  const router = useRouter();
  const { id } = params;

  // In a client component, you would typically use useEffect and useState for data fetching
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(
    (state: any) => state.recipes.favoriteRecipes
  );

  const addFavorite = () => {
    dispatch(toggleFavorite(recipe!));
    if (isFavorite) {
      toast.info("Removed from favorites");
    } else {
      toast.success("Added to favorites!");
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch recipe data");
        }
        const data = await res.json();
        setRecipe(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <RecipeDetailSkeleton />;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>No recipe found</div>;

  const isFavorite = favoriteRecipes.some((r: any) => r.id === recipe?.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Recipes
      </button>

      {/* Recipe Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            {/* Cuisine Badge */}
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full mb-3">
              {recipe.cuisine}
            </span>

            {/* Recipe Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1.5"
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
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {recipe.servings} servings
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={addFavorite}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`"h-6 w-6 text-gray-400 hover:text-red-500" ${
                isFavorite ? "text-red-500" : "text-gray-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Instructions
          </h2>
          <ol className="space-y-6">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-emerald-500 text-white rounded-full font-bold mr-4">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>

          {/* Nutrition Info */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Nutrition Information (estimated)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Calories</p>
                <p className="font-medium">{recipe.caloriesPerServing} kcal</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Protein</p>
                <p className="font-medium">
                  {Math.round((recipe.caloriesPerServing * 0.15) / 4)}g
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fat</p>
                <p className="font-medium">
                  {Math.round((recipe.caloriesPerServing * 0.35) / 9)}g
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Carbs</p>
                <p className="font-medium">
                  {Math.round((recipe.caloriesPerServing * 0.5) / 4)}g
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              *Nutrition values are estimates based on typical ratios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
