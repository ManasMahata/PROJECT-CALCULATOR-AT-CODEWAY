let display = document.querySelector('.display');

function Solve(value) {
    display.value += value;
}

function Clear() {
    display.value = '';
}

function Back() {
    display.value = display.value.slice(0, -1);
}

function Result() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Error: Invalid input');
    }
}