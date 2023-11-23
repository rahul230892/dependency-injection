export class ConsoleLogger{
    log(message){
        console.log(message)
    }
}

export class AlertLogger{
    log(message){
        alert(message)
    }
}

export class DevLogger{
    log(message){
        console.log('logger from dev')
    }
}

