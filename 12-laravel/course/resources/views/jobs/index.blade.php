<x-layout>
    <x-slot:heading>
        Jobs Page
    </x-slot:heading>
    <div class="container mx-auto px-4 py-4">
        @foreach ($jobs as $job)
            <ul class="list-disc pb-4">
                <li><a class="text-2xl mb-4" href="/jobs/job-{{ $job['id'] }}">{{ $job['title'] }}</a>
                    <ul class="pl-4">
                        <li>
                            <strong>Responsibility:</strong> {{ $job['description'] }}
                        </li>
                        <li>
                           <strong>Location:</strong> {{ $job['location'] }}
                        </li>
                        <li>
                            <strong>Pays</strong> {{ $job['salary'] }} per year.
                        </li>
                    </ul>
                </li>
            </ul>
        @endforeach
    </div>
</x-layout>
