<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

class Job {
    public static function all (): array
    {
        return [
        [
            'id' => 1,
            'title' => 'Software Engineer',
            'description' => 'Develop and maintain software applications.',
            'location' => 'New York, NY',
            'salary' => '$100,000 - $120,000',
        ],
        [
            'id' => 2,
            'title' => 'Data Scientist',
            'description' => 'Analyze data to help make business decisions.',
            'location' => 'San Francisco, CA',
            'salary' => '$110,000 - $130,000',
        ],
        [
            'id' => 3,
            'title' => 'Product Manager',
            'description' => 'Oversee product development from conception to launch.',
            'location' => 'Austin, TX',
            'salary' => '$120,000 - $140,000',
        ],
        
    ];
    }
}


Route::get('/', function () {
    return view('welcome');
});

Route::get('/jobs', function () {
    return view('jobs.index', [
        'jobs' => Job::all()
    ]);
});

Route::get('/jobs/job-{id}', function ($id) {
    

    $job = Arr::first(Job::all(), fn($job) => $job['id'] == $id);
    return view('jobs.show', ['job' => $job]);
});

Route::get('/about', function () {
    return view('about.index');
});

Route::get('/contact', function () {
    return view('contact.index');
});
