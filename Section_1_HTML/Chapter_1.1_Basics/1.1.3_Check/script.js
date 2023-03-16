let elementNames = ["h1", "h2", "h3", "h4", "h5", "h6"]
if ($("body").children().length != 6) {
    alert("You did not add all of the headers or too much. Try again.")
} else {
    let index = 0
    let cont = true;
    for (i of $("body").children()) {
        if (i.localName != elementNames[index]) {
            alert("One of your headers is in the wrong order. Try again.")
            cont = false;
            break;
        }
        index += 1
    }
    if (cont) {
        alert("Great job!")
    }
}