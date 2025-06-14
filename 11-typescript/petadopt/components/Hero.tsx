'use client';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Find Your Perfect
          <span className="text-orange-500 block">Furry Friend</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Give a loving home to pets in need. Browse through our adorable pets waiting for their forever families.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-2xl">🐕</span>
            <span>Dogs</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-2xl">🐱</span>
            <span>Cats</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-2xl">🐰</span>
            <span>Rabbits</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-2xl">🐦</span>
            <span>Birds</span>
          </div>
        </div>
      </div>
    </div>
  );
}