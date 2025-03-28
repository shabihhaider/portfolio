<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Validator;

/**
 * Contact Form Email Mailable
 * 
 * This class handles the email sent from the contact form.
 */
class ContactFormEmail extends Mailable
{
    use SerializesModels;

    /**
     * The email details.
     *
     * @var array
     */
    public $details;

    /**
     * Create a new message instance.
     *
     * @param array $details The email details containing name, email, and message
     * @throws \InvalidArgumentException
     */
    public function __construct(array $details)
    {
        $this->validateDetails($details);
        $this->details = $details;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('New Contact Form Submission')
                    ->view('emails.test_email');
    }

    /**
     * Validate the email details.
     *
     * @param array $details
     * @throws \InvalidArgumentException
     */
    private function validateDetails(array $details): void
    {
        $validator = Validator::make($details, [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10|max:1000',
        ]);

        if ($validator->fails()) {
            throw new \InvalidArgumentException('Invalid email details provided.');
        }
    }
}
