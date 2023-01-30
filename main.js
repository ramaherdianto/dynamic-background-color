const bgTarget = document.querySelector('#bg-target');
const colorInput = document.querySelector('#color-input');
const changeColor = document.querySelector('#change-color');

const setBackgroundColor = (color) => {
    const colorName = color.toLowerCase();
    bgTarget.className = `bg-[${colorName}] transition-all duration-[0.5s] ease-linear p-5 max-w-2xl h-[200px] flex items-center justify-center rounded-md border-[2px] border-pink-500`;
};

changeColor.addEventListener('click', function (e) {
    e.preventDefault();
    if (!colorInput.value) {
        alert('Please input the color value!');
    } else {
        setBackgroundColor(colorInput.value);
    }
});
