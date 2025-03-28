<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//use App\Http\Controllers\EmailController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

//Route::post('/email', [EmailController::class, 'sendEmail']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
