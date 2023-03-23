let schedule = {
   n: "{}",
}

schedule["8:30"] = {
    m: "get up",
}

let toBoolean = (schedule) => {
    let n = Object.keys(schedule);
    if (n.length) {
        console.log(true);
    }else {
        console.log(false);
    }
}

toBoolean(schedule)



