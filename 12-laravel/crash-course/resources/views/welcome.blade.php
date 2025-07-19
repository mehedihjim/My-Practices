<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="container flex flex-col items-center">
    <h1 class="text-center text-6xl pt-10">Homepage</h1>
    <div class="">
        <p class="text-center text-2xl pt-5">Welcome to our website!</p>
        <p class="text-center text-xl pt-3">This is a simple Laravel application using Vite for asset management.</p>
    </div>
    <a href="/posts" class="px-4 py-2 bg-slate-800 text-white rounded-lg w-fit mt-4">All posts</a>
</body>
</html>