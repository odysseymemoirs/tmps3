// шаблон определяет базовые шаги исполнения алгоритма и выполенние каждого из этих шагов
// и делегирует на соответствующие методы или классы(дочерние классы)

class Assemble {
	build() {
		this.extendMemory();
		this.installOperatingSystem();
		this.addSoftwarePackage();
		this.addOffice();
	}
};

class AsusBuilder extends Assemble {
	extendMemory() {
		console.log('Add 500Gb');
	}

	installOperatingSystem() {
		console.log('Install Windows10');
	}

	addSoftwarePackage() {
		console.log('Add Additional Software');
	}

    addOffice() {
        console.log('Add Excel, PowerPoint, Word\n')
    }
}

class DellBuilder extends Assemble {
	extendMemory() {
		console.log('Add 500Gb');
	}

	installOperatingSystem() {
		console.log('Install Linux');
	}

	addSoftwarePackage() {
		console.log('Add Additional Software');
	}
    addOffice() {
        console.log('Add Excel, PowerPoint, Word\n')
    }
}

let asusAssembler = new AsusBuilder()
let dellAssembler = new DellBuilder()

asusAssembler.build()
dellAssembler.build()

/*
Add 500Gb
Install Windows10
Add Additional Software
Add Excel, PowerPoint, Word

Add 500Gb
Install Linux
Add Additional Software
Add Excel, PowerPoint, Word
*/