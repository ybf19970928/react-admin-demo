export function dateTransform(seconds: number): string {
    let [days, hours, minutes, second]: string[] | number[] = [0,0,0,0]
    if (seconds > 0){
      days = Math.floor(seconds / (60*60*24))
      hours = Math.floor(seconds / (60*60) - days * 24)
      minutes = Math.floor(seconds / 60 - hours*60 - days*24*60)
      second = Math.floor(seconds - minutes*60 - hours*60*60 - days*24*60*60)
    }
    days = days<10 ? '0'+ days: days
    hours = hours<10 ? '0'+ hours: hours
    minutes = minutes<10 ? '0'+ minutes: minutes
    second = second<10 ? '0' + second: second
    return days + '天' + hours +'时'+ minutes +'分'+ second + '秒'
}