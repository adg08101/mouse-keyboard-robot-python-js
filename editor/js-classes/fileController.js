function readFile(e) {
    let file = e.target.files[0];
    if (!file) {
        return;
    }
    let reader = new FileReader();
    reader.onload = function(e) {
        let content = e.target.result;
        showContent(content);
    };
    reader.readAsText(file);
}

function showContent(content) {
    let element = document.getElementById('file-content');
    element.innerHTML = content;
    for (let i = 0;i < content.length;i++)
        if (content[i] == '\n')
            alert('EoF')
}

document.getElementById('file-input')
    .addEventListener('change', readFile, false);