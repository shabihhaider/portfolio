<h2>{{$slot}}</h2>
<div class="education-container">
    <div class="content">
        <x-education-card icon_class="fas fa-graduation-cap" year="2022 - Present (5th Semester)" degree="Bachelors in Computer Science (Hons)" school="University of Engineering and Technology Lahore"/>
        <x-education-card icon_class="fas fa-graduation-cap" year="2020 - 2022 | 89.27%" degree="FSc Pre-Engineering" school="GOVT. Islamia College Civil Lines, Lahore"/>
        <x-education-card icon_class="fas fa-graduation-cap" year="2019 - 2020 | 92.45%" degree="Matric in Computer Science" school="M.W High School"/>
    </div>
    <div class="image">
        <img src="{{Vite::asset('resources/images/education-image.svg')}}" alt="">
    </div>
</div>