// данный патерн формирует зависимости один к многим
// путем создания обьекта у которого тригерим изменения
// все обьекты которые подписаны на эти изменения получают эти изменения
class TechNews {
  
	constructor() {
		this.news = '';
		this.actions = [];
	}

	setNews(text) {
		this.news = text;
		this.notifyAll();
	}

	notifyAll() {
		return this.actions.forEach(subs => subs.inform(this));
	}

	register(observer) {
		this.actions.push(observer);
	}

	unregister(observer) {
		this.actions = this.actions.filter(el => !(el instanceof observer));
	}
};

class Observer {
    constructor(name){
        this.name = name
    }
	inform(message) {
		console.log(`${this.name} информирован о : ${message.news}`);
	}
};


const autoNews = new TechNews()

autoNews.register(new Observer('Alex'))
autoNews.register(new Observer('Andrei'))

autoNews.setNews("New Apple Macbook будет иметь 2tb sdd памяти")

/*
Alex информирован о : New Apple Macbook будет иметь 2tb sdd памяти
Andrei информирован о : New Apple Macbook будет иметь 2tb sdd памяти

*/