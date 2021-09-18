let key = document.querySelector('#key')
function pressed(event) {


    if (Event.altKey) {
        key.innerHTML = "alt key pressed :"
    }
    else {
        key.innerHTML = "not pressed"
    }

}
pressed;