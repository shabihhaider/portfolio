@props(['label', 'name', 'placeholder' => '', 'type'])

<div class="form-group">
    <label for="{{$name}}">{{$label}}</label>
    <x-forms.error :error="$errors->first($name)" />
    <input type="{{$type}}" id="{{$name}}" name="{{$name}}" placeholder="{{$placeholder}}" />
</div>