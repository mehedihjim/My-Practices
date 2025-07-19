<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Posts</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50 text-gray-800">
    <div class="max-w-3xl mx-auto p-6">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold">All Your Posts</h1>
            <a href="{{ route('posts.create') }}"
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition">
                + Create Post
            </a>
        </div>

        @forelse ($posts as $post)
            <div class="bg-white rounded-lg shadow-sm p-5 mb-6 hover:shadow-md transition">
                <h2 class="text-xl font-semibold mb-2 text-blue-700">{{ $post->title }}</h2>
                <p class="text-gray-700 leading-relaxed mb-4">{{ $post->content }}</p>

                <div class="flex items-center gap-4">
                    <a href="{{ route('posts.edit', $post->id) }}"
                        class="text-blue-600 hover:underline text-sm">Edit</a>

                    <form action="{{ route('posts.destroy', $post->id) }}" method="POST"
                          onsubmit="return confirm('Are you sure you want to delete this post?');">
                        @csrf
                        @method('DELETE')
                        <button type="submit"
                                class="text-red-600 hover:text-red-800 text-sm">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        @empty
            <p class="text-center text-gray-500">No posts found.</p>
        @endforelse
    </div>
</body>
</html>
