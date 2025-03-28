<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="format-detection" content="telephone=no">
    <title>{{ $details['subject'] }}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .message {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            margin: 15px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #eee;
        }
        .sender-info {
            margin: 15px 0;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                margin: 0 !important;
                padding: 10px !important;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0;">{{ $details['subject'] }}</h1>
        </div>
        
        <div class="content">
            <div class="sender-info">
                <p style="margin: 0;"><strong>From:</strong> {{ e($details['name']) }}</p>
                <p style="margin: 5px 0 0 0;"><strong>Email:</strong> {{ e($details['email']) }}</p>
            </div>
            
            <div class="message">
                {!! nl2br(e($details['message'])) !!}
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">This is an automated message from your contact form.</p>
            <p style="margin: 5px 0 0 0;">© {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>