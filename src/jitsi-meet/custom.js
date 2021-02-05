let elem = document.getElementById('btn_back_history');

elem.addEventListener('click', () => {
    const history = window.history
    console.log(history.back())
})
