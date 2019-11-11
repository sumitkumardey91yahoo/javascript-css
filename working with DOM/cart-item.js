function deleteData(e) {
    console.log("e", e.target.parentNode.parentNode.childNodes[5].innerText)
    e.target.parentNode.parentNode.remove()
    
}

for(let i = 0; i< document.getElementsByTagName('button').length; i++) {

    document.getElementsByClassName('button')[i].addEventListener("click", deleteData)
}

