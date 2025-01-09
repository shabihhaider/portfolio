@props(['label', 'name', 'placeholder' => ''])

<div class="form-group">
    <label for="{{$name}}">{{$label}}</label>
    <x-forms.error :error="$errors->first($name)" />
    <textarea id="{{$name}}" name="{{$name}}" rows="4" placeholder="{{$placeholder}}"></textarea>
</div>