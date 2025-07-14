<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about.index');
});

Route::get('/collab', function () {
    return view('collab.index', ['name' => 'MH JIM']);
});

Route::get('/lang', function () {

    $langs = [
        ["Name" => 'JavaScript', "Type" => 'Scripting Language', "Year" => 1995],
        ['Name' => 'Python', "Type" => 'Programming Language', "Year" => 1991],
        ['Name' => 'Java', "Type" => 'Programming Language', "Year" => 1995],
        ['Name' => 'C++', "Type" => 'Programming Language', "Year" => 1985],
        ['Name' => 'Ruby', "Type" => 'Programming Language', "Year" => 1995],
        ['Name' => 'PHP', "Type" => 'Scripting Language', "Year" => 1995],
        ['Name' => 'Go', "Type" => 'Programming Language', "Year" => 2009],
        ['Name' => 'Rust', "Type" => 'Systems Programming Language', "Year" => 2010],
        ['Name' => 'Swift', "Type" => 'Programming Language', "Year" => 2014],
        ['Name' => 'Kotlin', "Type" => 'Programming Language', "Year" => 2011],
        ['Name' => 'TypeScript', "Type" => 'Programming Language', "Year" => 2012],
    ];

    return view('lang.index', ['langs' => $langs]);
});