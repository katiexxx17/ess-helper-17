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

document.getElementById('DonateButton').addEventListener('click', function() {
    const reqs = document.getElementById('reqs');
    if (reqs.style.display === 'none' || reqs.style.display === '') {
        reqs.style.display = 'inline'; // Меняем на flex
    } else {
        reqs.style.display = 'none'; // Можно добавить возможность скрыть обратно
    }
});

document.getElementsByClassName('open-cat').addEventListener('click', function() {
    const reqs = document.getElementsByClassName('ustav-cat');
    if (reqs.style.display === 'none' || reqs.style.display === '') {
        reqs.style.display = 'flex'; // Меняем на flex
    } else {
        reqs.style.display = 'none'; // Можно добавить возможность скрыть обратно
    }
});

document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.nextElementSibling;
        info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
    });
});
