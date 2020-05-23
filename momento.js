// momento позволяет сохранят и восстанавливать предыдущее состояние обьекта

class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
};

const laptop = new Caretaker();

laptop.addMemento(creator.save('Windows 7 Installed'))
laptop.addMemento(creator.save('Windows 10 Installed'))
laptop.addMemento(creator.save('Linux Cinnamon Installed'))

console.log(creator.restore(laptop.getMemento(0)))
// Windows 10 Installed

console.log(creator.restore(laptop.getMemento(2)))
// Linux Cinnamon Installed

