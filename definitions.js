export function performCalenderOperation(body) {
    let currentDate = body.currentDate;
    let dayOrWeek = body.dayOrWeek;
    let num = body.num;
    let operation = body.operation;
    var days
    let date = new Date(currentDate);
    if(dayOrWeek == "week"){
        days = 7 * num;
    }
    else {
        days=num;
    }
    if(operation == "add"){
        date.setDate(date.getDate() + days);
    }
    else{
        date.setDate(date.getDate() - days);
    }
    return date
}