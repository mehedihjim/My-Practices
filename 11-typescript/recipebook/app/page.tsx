"use client";
import React, { useEffect, useState } from "react";
import RecipeCard from "@/components/ui/RecipeCard";
import RecipeCardSkeleton from "@/components/ui/RecipeSkeleton";
import { time } from "console";
import { useRouter } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
  image: string;
}

const Page = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);
  const router = useRouter();

  return (
    <div className="py-10 container mx-auto">
      <h1 className="mb-16 text-5xl font-bold text-center">
        Our Recipes to Make You Feel Hungry~
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <RecipeCardSkeleton />
          <RecipeCardSkeleton />
          <RecipeCardSkeleton />
          <RecipeCardSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
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
  );
};

export default Page;
