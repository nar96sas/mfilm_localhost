function turnOnTheLight() {
    $('.overlay-tatden').css({ 'display': 'none' });
}

$(document).mouseup(function (e) {
    var container = $('.a-top-search-form-f');
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) { // ... nor a descendant of the container
        container.hide();
    }
});

$(document).ready(function () {
    $('.overlay-tatden').click(function () {
        turnOnTheLight();
    });

    $('.drawer').drawer({
        iscroll: {
            mouseWheel: true,
            preventDefault: false
        }
    });
});

