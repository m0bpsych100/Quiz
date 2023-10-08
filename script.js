fetch("https://the-trivia-api.com/v2/questions")
    .then(res => res.json())
    .then(data => display(data))
    .catch(e => console.log(e))

function display(data) {
    let quest = document.getElementById("question")
    let num = Math.floor(Math.random() * 11)
    quest.innerText = data[num].question.text
    let options = [...data[num].incorrectAnswers ,data[num].correctAnswer]
    shuffleOptions(options)
    options.forEach(el => {
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.innerText = el
        ul.appendChild(li)
        let div = document.getElementById("options")
        div.appendChild(ul)
        li.addEventListener('click', () => {
            if (el == data[num].correctAnswer) {
                li.style.color = "green"
                li.style.border = "1px dashed green"
            } else {
                li.style.color = "red"
                li.style.border = "1px dashed red"
            }
        })
        let btn = document.getElementById("next-btn")
        btn.addEventListener('click', () => {
            location.reload();
        })
    });
    
}

function shuffleOptions(options) {
    //algo for shuffling the array
    return options
}