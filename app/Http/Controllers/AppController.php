<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\User;

class AppController extends Controller
{

    public function getPage(Request $request, int $id)
    {
        $user = User::where('id', $id)->first();
        if (isset($user)) {
            return view('appPhp', ['user' => $user]);
        }
    }

    public function getUser(Request $request)
    {
        $userId = Auth::id();
        $user = User::where('id', $userId)->first();
        if (isset($user)) {
            return response($user);
        }
    }
}
