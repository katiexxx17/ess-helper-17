document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.nextElementSibling;
        info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
    });
});

document.querySelectorAll('.title-2-mo').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.nextElementSibling;
        info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
    });
});

document.querySelectorAll('.title-2-mcs').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.nextElementSibling;
        info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
    });
});