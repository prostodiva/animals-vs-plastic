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
