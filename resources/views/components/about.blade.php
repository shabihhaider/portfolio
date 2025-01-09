@props(['about'])

<div class="content">
    <h1>Hi, I'm 
        <span class="name">Muhammad Shabih Haider</span>
    </h1>                
    <p>{{$about}}</p>
    <a href="{{ asset('storage/resume/Updated.pdf') }}" target="_blank">
        <button>Download CV</button>
    </a>
</div>

<div class="image">
    <img src="{{Vite::asset('resources/images/profile-picture.png')}}" alt="profile picture" />
</div>