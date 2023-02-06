function getKey(e) {
    var location = e.location;
    var selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']

        console.log(selector);
    } else {
        var code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
        console.log(selector);
    }
    return document.querySelector(selector);
}




document.body.addEventListener('keydown', function (e) {
    var key = getKey(e);
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
    var key = getKey(e);
    key && key.removeAttribute('data-pressed');
});


function size() {
    var size = keyboard.parentNode.clientWidth / 90;
    keyboard.style.fontSize = size + 'px';
    console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});
size();


let arr = ["hello", "world", "yes", "no", "okay", "cat", "dog", "laptop", "phone", "shoes", "bag", "watch",
    "shirt", "motorbike", "floor", "hat", "sneaker", "speed", "tour", "guitar", "singer", "sleep", "run", "talk",
    "flight", "football", "basketball", "goalkeeper", "freekick", "outside", "inside", "handball", "goal", 
    "striker", "midfielder", "defender", "referee", "match", "assist", "champion"]
let output = document.getElementById("output");
let add = document.getElementById("add");
let score = document.getElementById("score")
let count = 0;
function enter(event) {
    if (event.key == "Enter" && add.value == output.innerHTML) {
        count++;
        score.innerHTML = count;
        let index = Math.floor(Math.random() * arr.length);
        output.innerHTML = arr[index]
        add.value = "";
    }
}
window.addEventListener("keypress", enter);



