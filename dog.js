var chalk = require('chalk');
var dog = {
	name: 'Tom',
	sayHi: function (){
		console.log(`i will say hi ${chalk.red(this.name)}`);
	}
}

module.exports = dog;