const bgTarget = document.querySelector('#bg-target');
const colorInput = document.querySelector('#color-input');
const changeColor = document.querySelector('#change-color');

const setBackgroundColor = (color) => {
    const colorName = color.toLowerCase();
    bgTarget.className = `bg-[${colorName}] p-5 w-[500px] h-[200px] flex items-center justify-center rounded-md border-[5px] border-pink-700`;
};

changeColor.addEventListener('click', function (e) {
    e.preventDefault();
    if (!colorInput.value) {
        alert('Please input the color value!');
    } else {
        setBackgroundColor(colorInput.value);
    }
});
