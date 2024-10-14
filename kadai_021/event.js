const btnItem = document.getElementById('btn');

const textItem = document.getElementById('text');

btnItem.addEventListener('click',() => {
    setTimeout(() => {
        textItem.textContent = "ボタンをクリックしました";

    }, 2000);
});
