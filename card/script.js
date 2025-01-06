document.getElementById('fun-fact-btn').addEventListener('click', function () {
    const funFact = document.getElementById('fun-fact');
    if (funFact.classList.contains('hidden')) {
        funFact.classList.remove('hidden');
    } else {
        funFact.classList.add('hidden');
    }
});
