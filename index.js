const textElement = document.querySelector(".content");
const html = `
<h1>Hi, I'm <span class="my-name">Mazal Iliadjanov</span></h1>
<h2>A Computer Science student at Reichman University</h2>`;

function getAmount(text, char) {
    return [...text].filter(c => c === char).length
}

function getSlice(index) {
    let end = index;
    let content = html.slice(0, end);

    while (getAmount(content, "<") !== getAmount(content, ">")) {
        end++;
        content = html.slice(0, end);
    }

    return { content, index: end };
}

let i = 0;
function addLetter() {
    if (i < html.length) {
        const { content, index } = getSlice(i);
        textElement.innerHTML = content;
        i = index + 1;
        setTimeout(addLetter, 80);
    }
}
addLetter();
