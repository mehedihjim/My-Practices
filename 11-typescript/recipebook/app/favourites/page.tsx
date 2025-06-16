"use client";
import RecipeCard from "@/components/ui/RecipeCard";
import RecipeCardSkeleton from "@/components/ui/RecipeSkeleton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();

  const favoriteRecipes = useSelector(
    (state: any) => state.recipes.favoriteRecipes
  );

  return (
    <div>
      <div className="py-10 container mx-auto">
        <h1 className="mb-16 text-5xl font-bold text-center">
          Your Favourite Recipies~
        </h1>
        {favoriteRecipes.length === 0 ? (
          <p className="text-center text-gray-500">No favorites yet~</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteRecipes.map((recipe: any) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.name}
                imageUrl={recipe.image}
                onViewDetails={() => router.push(`/recipes/${recipe.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
