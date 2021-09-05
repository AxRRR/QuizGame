export function GetActualTime(){
    const Day = new Date();
    return Day.getHours() + ':' + Day.getMinutes() + ':' + Day.getSeconds();
}