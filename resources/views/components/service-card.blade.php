@props(['icon_class'])
<div class="service-card">
    <div class="icon"><i class="{{$icon_class}}"></i></div>
    <h3>{{$slot}}</h3>
</div>