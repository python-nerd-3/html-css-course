if ($("a").length > 0) {
    if ($("a").attr("href") == "https://www.google.com") {
        if ($("a").html() == "Google") {
            alert("Great job!")
        } else {
            alert("The text is incorrect. Try again.")
        }
    } else {
        alert("The link is incorrect. Try again.")
    }
} else {
    alert("You do not have an anchor. Try again.")
}