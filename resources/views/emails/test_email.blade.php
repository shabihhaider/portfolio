<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $details['subject'] }}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h1>{{ $details['subject'] }}</h1>
    <p><strong>From:</strong> {{ $details['name'] }} ({{ $details['email'] }})</p>
    <p>{{ $details['body'] }}</p>
</body>
</html>
