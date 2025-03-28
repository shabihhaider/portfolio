<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormEmail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
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
                'message' => $validated['message'],
                'subject' => 'New Contact Form Submission'
            ];

            // Get the recipient email from config
            $recipientEmail = config('mail.from.address');
            if (!$recipientEmail) {
                Log::error('Recipient email not configured');
                return response()->json(['error' => 'Email configuration is missing'], 500);
            }

            // Send email
            Mail::to($recipientEmail)->send(new ContactFormEmail($details));

            // Log success
            Log::info('Email sent successfully from: ' . $validated['email']);
            
            return response()->json([
                'success' => true,
                'message' => 'Your message has been sent successfully!'
            ]);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Email sending failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'error' => 'Failed to send email. Please try again later.'
            ], 500);
        }
    }
}