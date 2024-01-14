<?php

use App\Http\Controllers\EntryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PollController;
use App\Http\Controllers\VoteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::prefix('poll')->group(function () {
    Route::get('/', [PollController::class, 'index']);
    Route::post('/', [PollController::class, 'create']);
    Route::get('/success', [PollController::class, 'created'])->name('poll.created');
    Route::get('/{slug}', [PollController::class, 'show'])->name('poll.show');
    Route::get('/{slug}/results', [PollController::class, 'showResults'])->name('poll.results');
});

Route::prefix('entry')->group(function () {
    Route::post('/submit', [EntryController::class, 'create']);
});

Route::post('/test', [Pollcontroller::class, 'test']);