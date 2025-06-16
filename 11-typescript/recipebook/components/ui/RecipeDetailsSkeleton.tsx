// app/recipes/[id]/loading.tsx
export default function RecipeDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button Skeleton */}
      <div className="flex items-center mb-6">
        <div className="w-5 h-5 bg-gray-200 rounded-full mr-2"></div>
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div className="w-full">
            {/* Cuisine Badge Skeleton */}
            <div className="h-6 w-24 bg-gray-200 rounded-full mb-4"></div>

            {/* Title Skeleton */}
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>

            {/* Meta Info Skeleton */}
            <div className="flex gap-4 mb-4">
              <div className="h-5 w-24 bg-gray-200 rounded"></div>
              <div className="h-5 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Tags Skeleton */}
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Favorite Button Skeleton */}
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Image Skeleton */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8 h-96 bg-gray-200"></div>

      {/* Content Grid Skeleton */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Ingredients Skeleton */}
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
            <ul className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="flex">
                  <div className="h-4 w-4 bg-gray-200 rounded-full mt-1 mr-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions Skeleton */}
        <div className="md:col-span-2">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
          <ol className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="flex">
                <div className="h-8 w-8 bg-gray-200 rounded-full mr-4"></div>
                <div className="h-16 w-full bg-gray-200 rounded mt-1"></div>
              </li>
            ))}
          </ol>

          {/* Nutrition Skeleton */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-1"></div>
                  <div className="h-5 w-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
