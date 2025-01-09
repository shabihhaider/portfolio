<form action="/email" method="POST">
    @csrf

    <x-forms.input label="Name" name="name" type="text" placeholder="Enter your Name" required />

    <x-forms.input label="Email" name="email" type="email" placeholder="Enter your email" required />
    
    <x-forms.textarea label="Message" name="message" placeholder="Write your message..." required />

    <button type="submit">Send Message</button>
</form>

<x-social-media-links />