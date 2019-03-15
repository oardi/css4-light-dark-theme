window.onload = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });
}