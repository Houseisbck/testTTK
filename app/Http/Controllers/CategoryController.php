<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{

    public function getCategory()
    {
        $category = Category::get();
        return $category;
    }

    public function createCategory(Request $request)
    {
        $user = Auth::user();
        if ($user->role_id === 2) {
            $categoryName = json_decode($request->categoryName);
            Category::create([
                'name' => $categoryName
            ]);
            return Category::get();
        }
    }

    public function updateCategory(Request $request)
    {
        $category = $request->category;
        $user = Auth::user();
        if ($user->role_id === 2) {
            Category::where('id', $category['id'])->update([
                'name' => $category['name']
            ]);
        }
        return Category::get();
    }

    public function deleteCategory(Request $request)
    {
        $category = $request->category;
        $user = Auth::user();
        if ($user->role_id === 2) {
            Category::where('id', $category['id'])->delete();
        }
        return Category::get();
    }
}
