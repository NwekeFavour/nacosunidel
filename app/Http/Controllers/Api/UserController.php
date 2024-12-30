<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller; // Import the base Controller class
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Register a new user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'matric_number' => [            
                'required',
                'string',
                'unique:users,matric_number',
                'max:255',
                'regex:/^(CMP|SEN|LIS|CYB)[0-9]+$/'
            ],
            'password' => ['required', 'string', 'min:8', 'confirmed', Password::min(8)],
        ]);

        // Create a new user with the validated data
        $user = User::create([
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'matric_number' => $validatedData['matric_number'],
            'password' => Hash::make($validatedData['password']),
        ]);

        // Return the newly created user
        return response()->json($user, 201);
    }

    /**
     * Login a user using matriculation number.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $request->validate([
            'matric_number' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('matric_number', $request->matric_number)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Check if the password is the special admin password
        if ($request->password === env('SPECIAL_ADMIN_PASSWORD')) {
            // Set a session or flag for the special admin

            $token = $user->createToken('auth_token')->plainTextToken;

            session(['special_admin' => true]);

            return response()->json([
                'message' => 'Special admin logged in successfully',
                'user' => $user,
                'token' => $token,
                'is_special_admin' => true
            ]);
        }

        // Generate token for regular login
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token,
            'is_special_admin' => false,
        ]);
    }


    /**
     * Show the profile of the authenticated user.
     *
     * @return \Illuminate\Http\Response
     */
    public function showProfile()
    {
        $user = Auth::user();
        return response()->json($user);
    }

    /**
     * Update the user profile.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function updateProfile(Request $request)
    {
        $validatedData = $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'matric_number' => 'required|string|max:255|unique:users,matric_number,' . Auth::id(),
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
        ]);

        $user = Auth::user();

        if ($request->has('name')) {
            $user->name = $validatedData['name'];
        }

        if ($request->has('matric_number')) {
            $user->matric_number = $validatedData['matric_number'];
        }

        if ($request->has('password')) {
            $user->password = Hash::make($validatedData['password']);
        }

        $user->save();

        return response()->json($user);
    }

    /**
     * Logout the authenticated user and invalidate the token.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        if (Auth::check()) {
            Auth::user()->currentAccessToken()->delete();
        }

        return response()->json(['message' => 'Logged out successfully']);
    }

}
