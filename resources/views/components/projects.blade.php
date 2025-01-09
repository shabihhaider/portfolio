<h2>{{$slot}}</h2>

<!-- Projects Cards -->
<div class="projects-container">
    <x-project-card img="{{asset('storage/images/Project_1.PNG')}}" githubLink="https://github.com/shabihhaider/Gender-Prognosis-Guess-the-Gender-of-a-person-" title="Gender Prognosis" details="Aims to develop a predictive model that estimates the gender of a person based on specific input data." tags="html,css,jQuery,bootstrap"/>
    <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 2" details="sdnfuidsafsdbufibsdaf sdhfibadsfbds"></x-project-card>
    <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
</div>

<!-- View All Projects Button -->
<div class="view-all-container">
    <a href="/project" target="_blank">
        <button class="view-all-btn">
            View All
            <span class="arrow">➔</span>
        </button>
    </a>
</div>