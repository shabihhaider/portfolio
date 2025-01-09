<!-- Display success message -->
@if(session('success'))
<div id="success-popup">
    <span>✔</span>
    <p>{{ session('success') }}</p>
</div>
@endif