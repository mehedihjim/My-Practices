<x-layout>
    <x-slot:heading>
        {{ $job['title'] }}
    </x-slot:heading>

    <div class="container mx-auto px-4 py-6 max-w-3xl">
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-semibold mb-4">Role Description</h2>
            <p class="mb-6 text-gray-700">{{ $job['description'] }}</p>

            <div class="mb-4">
                <span class="font-semibold">Location:</span>
                <span>{{ $job['location'] }}</span>
            </div>

            <div class="mb-6">
                <span class="font-semibold">Salary:</span>
                <span>{{ $job['salary'] }} per year</span>
            </div>

            <a href="/jobs" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                ← Back to Jobs
            </a>
        </div>
    </div>
</x-layout>
