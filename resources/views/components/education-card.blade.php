@props(['icon_class', 'year', 'degree', 'school'])
<div class="education-card">
    <div class="icon">
        <i class="{{$icon_class}}"></i>
    </div>
    <div class="content">
        <span class="year">{{$year}}</span>
        <h3>{{$degree}}</h3>
        <p>{{$school}}</p>
    </div>
</div>