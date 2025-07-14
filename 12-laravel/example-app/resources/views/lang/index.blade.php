<x-layout>
    <h2 class="text-5xl text-slate-500 mb-10 text-center">Programming Languages</h2>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-auto">
    @foreach ($langs as $lang)
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{{ $lang['Name'] }} -> {{ $lang['Type'] }} -> {{ $lang['Year'] }}</li>
    @endforeach
</ul>


</x-layout>