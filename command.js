
// command патерн позволяет создавать определенную абстрактную оболочку над функционалом
// который позволяет управлять но уже через другой обьект
class MyLaptop {
  constructor(initialValue = 'safe') {
    this.mode = initialValue
  }

  gameMode() {
    return this.mode = 'game'
  }

  energySafeMode() {
    return this.mode = 'safe'
  }
  turnOff() {
    return this.mode = 'off'
  }
  turnOn() {
    return this.mode = 'on'
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]
  }
}

const x = new Command(new MyLaptop(''))

x.execute('on')
x.execute('safe')
x.execute('game')
x.execute('off')

console.log(x.commandsExecuted)