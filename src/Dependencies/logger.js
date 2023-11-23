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

export class FromFeature{
    log(message){
        console.log('First Feature change')
    }
}
