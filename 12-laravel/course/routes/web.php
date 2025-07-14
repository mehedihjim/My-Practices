<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about.index');
});

Route::get('/contact', function () {
    return view('contact.index');
});