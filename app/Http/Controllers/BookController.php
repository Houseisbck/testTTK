<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Author;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;

class BookController extends Controller
{

    public function createBook(Request $request)
    {

        $user = Auth::user();

        if ($user) {

            $book = $request->book;

            $book = json_decode($book);

            $bookCover = $request->file('bookCover');

            $filename = time() . '.' . $bookCover->getClientOriginalExtension();

            Image::make($bookCover)->resize(300, 700)->save(storage_path('/app/public/images/' . $filename));

            $createdBook = Book::create([
                'name' => $book->bookName,
                'description' => $book->bookDescr,
                'user_id' => $user->id,
                'path' => '/storage/images/' . $filename
            ]);
            $createdBook->categories()->attach($book->categories);
            $createdBook->authors()->attach($book->authors);

            return Book::with('authors', 'categories')->get();
        }
    }

    public function getBooks()
    {
        return Book::with('authors', 'categories')->get();
    }

    public function updateBook(Request $request)
    {

        $user = Auth::user();

        $book = $request->objectBook;

        $book = json_decode($book);


        if ($user->id === $book->user_id || $user->role === 2) {
            $updateBook = Book::where('id', $book->id)->first();
            $updateBook->update([
                'name' => $book->name,
                'description' => $book->description,
                'path' => $book->path
            ]);
            $updateBook->categories()->detach();
            $updateBook->authors()->detach();
            $updateBook->authors()->attach($book->authors);
            $updateBook->categories()->attach($book->categories);
            return Book::where('id', $book->id)->with('authors', 'categories')->get();
        }
    }

    public function deleteBook(Request $request)
    {
        $user = Auth::user();

        $book = $request->objectBook;

        if ($user->id === $book['user_id'] || $user->role === 2) {
            Book::where('id', $book['id'])->delete();
        }
        return Book::with('authors', 'categories')->get();
    }
}
