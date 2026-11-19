const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
});

// Pledge counter
const pledgeBtn = document.querySelector('.pledge-btn');
const pledgeCount = document.getElementById('pledge-count');

if (pledgeBtn && pledgeCount) {
    let count = Number(pledgeCount.textContent.replace(/,/g, ''));

    pledgeBtn.addEventListener('click', () => {
        count++;
        pledgeCount.textContent = count.toLocaleString('en-US');
        pledgeBtn.disabled = true;
    });
}

// Accordion (FAQ page)
const buttons = document.querySelectorAll('.accordion button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // 1. Remember whether THIS one was open — before touching anything
        const wasExpanded = button.getAttribute('aria-expanded') === 'true';

        // 2. Close everything, no exceptions
        buttons.forEach((other) => {
            other.setAttribute('aria-expanded', 'false');
            document.getElementById(other.getAttribute('aria-controls')).hidden = true;
        });

        // 3. Open the clicked one — but only if it wasn't already open
        if (!wasExpanded) {
            button.setAttribute('aria-expanded', 'true');
            document.getElementById(button.getAttribute('aria-controls')).hidden = false;
        }
    });
});
