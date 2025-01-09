@props(['img', 'title', 'details', 'githubLink' => '#', 'tags' => 'Tag'])

<div class="project-card">
    <div class="card-content">
      <div class="image-container">
        <img src="{{$img}}" alt="project_image" class="project-image">
        <div class="image-overlay">
          <div class="github-icon">
            <a href="{{$githubLink}}" target="_blank"> 
              <img src="{{Vite::asset('resources/images/github-logo-1.png')}}" alt="source code" class="github-img">
            </a>
          </div>
        </div>
      </div>
      <div class="text-content">
        <h3 class="project-title">{{ $title}}</h3>
        <p class="project-description">
            {{$details}}
        </p>
      </div>
      <div class="tags">

        @foreach(explode(',', $tags) as $tag)
          <p class="tag">{{ '#' . trim($tag) }}</p>
        @endforeach
      
      </div>
    </div>
</div>      