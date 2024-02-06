export const getFillColor = color => {
    if (color === null) {
        return "#ff33cc"
    }
    return color
}

export const formatTime = timestamp => {
    const now = new Date()
    const postDate = new Date(timestamp * 1000) // Converti il timestamp in millisecondi
    const secondsPast = Math.floor((now.getTime() - postDate.getTime()) / 1000)

    if (secondsPast < 60) {
        return `${secondsPast} secs ago`
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)} mins ago`
    }
    if (secondsPast <= 86400) {
        return `${Math.floor(secondsPast / 3600)} h ago`
    }
    if (secondsPast > 86400) {
        let day = postDate.getDate()
        let monthMatch = postDate.toDateString().match(/ [a-zA-Z]*/)
        let month = monthMatch ? monthMatch[0].replace(" ", "") : ""
        let year =
            postDate.getFullYear() == now.getFullYear()
                ? ""
                : " " + postDate.getFullYear()
        return `${day} ${month}${year}`
    }
}
