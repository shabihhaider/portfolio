<x-layout>
    <x-section name="projects">
        <h2>Projects</h2>

        {{-- <p>Search the projects by title or filter by category</p>
            
            <div class="filters">
                <!-- Search Bar -->
                <div class="search-bar">
                    <span class="search-icon">&#x1F50D;</span> <!-- Search icon -->
                    <input type="text" id="search-input" placeholder="Search projects by title">
                </div>
        
                <!-- Category Filter -->
                <div class="category-filter">
                    <button class="category-btn">Categories</button>
                    <ul class="dropdown-menu">
                        <li><button class="category-option" data-category="all">All</button></li>
                        <li><button class="category-option" data-category="web">Web Development</button></li>
                        <li><button class="category-option" data-category="ml">Machine Learning</button></li>
                        <li><button class="category-option" data-category="ai">AI Projects</button></li>
                        <li><button class="category-option" data-category="business">Business</button></li>
                    </ul>
                </div>
            </div> --}}

        <!-- Projects Cards -->
        <div class="projects-container">
            <x-project-card img="{{asset('storage/images/Project_1.PNG')}}" githubLink="https://github.com/shabihhaider/Gender-Prognosis-Guess-the-Gender-of-a-person-" title="Gender Prognosis" details="Aims to develop a predictive model that estimates the gender of a person based on specific input data." tags="html,css,jQuery,bootstrap"/>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 2" details="sdnfuidsafsdbufibsdaf sdhfibadsfbds"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
            <x-project-card img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja"></x-project-card>
        </div>
    </x-section>
</x-layout>