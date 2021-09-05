<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;

Auth::routes();

Route::get('/', function () {
    return view('appPhp');
});

Route::get('/getUser', [AppController::class, 'getUser'])->name('getUser');

Route::get('/getCategory', [CategoryController::class, 'getCategory'])->name('getCatygory');

Route::post('/createCategory', [CategoryController::class, 'createCategory'])->name('createCategory');

Route::post('/updateCategory', [CategoryController::class, 'updateCategory'])->name('updateCategory');

Route::post('/deleteCategory', [CategoryController::class, 'deleteCategory'])->name('deleteCategory');

Route::get('/getAuthors', [AuthorController::class, 'getAuthors'])->name('getAuthors');

Route::post('/createAuthor', [AuthorController::class, 'createAuthor'])->name('createAuthor');

Route::post('/updateAuthor', [AuthorController::class, 'updateAuthor'])->name('updateAuthor');

Route::post('/deleteAuthor', [AuthorController::class, 'deleteAuthor'])->name('deleteAuthor');

Route::post('/createBook', [BookController::class, 'createBook'])->name('createBook');

Route::get('/getBooks', [BookController::class, 'getBooks'])->name('getBooks');

Route::post('/updateBook', [BookController::class, 'updateBook'])->name('updateBook');

Route::post('/deleteBook', [BookController::class, 'deleteBook'])->name('deleteBook');