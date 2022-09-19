function counter(a) {
    let l = 0;
    let d = 0;
    let t = "Likelar  ko'p";
    let f = "Dislikelar ko'p";
    let g = "Hech narsa yo`q";
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "like") {
            l = l + 1;
        }
        if (a[i] == "dislike") {
            d = d + 1;
        }
    }
    if (l > d) {
        return t;
    } else if (d > l) {
        return f;
    }
    else {
        return g;
    }
}
console.log(counter(["dislike", "like", "like"]));