(function () {
    const buttons = document.querySelectorAll('.counterBtn');
    // console.log(buttons);
    const counter = document.querySelector('.counter');

    // console.log(counter);
    let count = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('prevBtn')) {
                count--;
            }
            else {
                count++;
            }

            counter.textContent = count;

            // console.log(count);
            // console.log(typeof (counter));

            if (counter.textContent > 0) {
                counter.style.color = 'green';
            } else if (counter.textContent < 0) {
                counter.style.color = 'red';
            } else {
                counter.style.color = '#333333';
            }
        });
    });
    // console.log(count);
})();

// console.log("heelo saab");