<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthorController extends Controller
{
    public function getAuthors()
    {
        $authors = Author::get();

        return $authors;
    }

    public function createAuthor(Request $request)
    {
        $user = Auth::user();
        $authorName = json_decode($request->authorName);
        
        if ($user->role_id === 2) {
            Author::create([
                'name' => $authorName
            ]);
        }
    }

    public function updateAuthor(Request $request)
    {
        $author = $request->author;
        $user = Auth::user();

        if ($user->role_id === 2) {
            Author::where('id', $author['id'])->update([
                'name' => $author['name']
            ]);
        }
    }

    public function deleteAuthor(Request $request)
    {
        $author = $request->author;
        $user = Auth::user();

        if ($user->role_id === 2) {
            Author::where('id', $author['id'])->delete();
        }
    }
}
