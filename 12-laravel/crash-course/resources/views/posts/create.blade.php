@extends('layouts.default')

@section('header')
@endsection

@section('content')
    <div class="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-6 text-center">Publish Your Post</h1>
        <form action="{{ route('posts.store') }}" method="POST" class="space-y-5">
            @csrf
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" id="title" name="title" value="{{ old('title') }}"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="content" class="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea id="content" name="content"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">{{ old('content') }}</textarea>

            </div>
            @if ($errors->any())
                <div class="text-red-600 text-sm mb-4">
                    Please fix the errors below.
                </div>
            @endif
            @foreach ($errors->all() as $error)
                <div class="text-red-600 text-sm">{{ $error }}</div>
            @endforeach
            <button type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
                Submit
            </button>
        </form>
    </div>
@endsection
