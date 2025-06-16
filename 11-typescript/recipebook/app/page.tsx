"use client";
import React, { useEffect, useState } from "react";
import RecipeCard from "@/components/ui/RecipeCard";
import RecipeCardSkeleton from "@/components/ui/RecipeSkeleton";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
  image: string;
}

interface RecipesResponse {
  recipes: Recipe[];
}

const RECIPES_PER_PAGE = 12;

const Page = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=50");
        const data: RecipesResponse = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Calculate recipes for current page
  const offset = currentPage * RECIPES_PER_PAGE;
  const currentRecipes = recipes.slice(offset, offset + RECIPES_PER_PAGE);
  const pageCount = Math.ceil(recipes.length / RECIPES_PER_PAGE);

  // Handle page click
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page change
  };

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
      ) : recipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.name}
                imageUrl={recipe.image}
                onViewDetails={() => router.push(`/recipes/${recipe.id}`)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="flex space-x-2 text-gray-700"
              pageClassName="cursor-pointer px-3 py-1 rounded border border-gray-300 hover:bg-emerald-100"
              pageLinkClassName=""
              previousClassName="cursor-pointer px-3 py-1 rounded border border-gray-300 hover:bg-emerald-100"
              nextClassName="cursor-pointer px-3 py-1 rounded border border-gray-300 hover:bg-emerald-100"
              activeClassName="bg-emerald-500 text-white border-emerald-500"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakLabel={"..."}
              breakClassName="px-3 py-1"
              renderOnZeroPageCount={null}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
