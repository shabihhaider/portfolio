@props(['error' => false])

@if ($error)
    <p id="error">{{ $error }}</p>
@endif