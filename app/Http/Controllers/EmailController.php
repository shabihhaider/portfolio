<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestEmail;

class EmailController extends Controller
{
    public function index(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10|max:1000',
        ]);

        try {
            // Prepare email details
            $details = [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'subject' => 'New Contact Form Submission',
                'body' => $validated['message'],
            ];

            // Send email
            Mail::to('blagattv72@gmail.com')->send(new TestEmail($details));

            // Flash success message
            return redirect()->back()->with('success', 'Your message has been sent successfully!');
        } catch (\Exception $e) {
            // Log error and return error message
            return redirect()->back()->withErrors(['email' => 'Failed to send email. Please try again later.']);
        }
    }
}
