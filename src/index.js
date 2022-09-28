const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	let data = await fs.writeFile(fileName,fileContent);
	console.log('file created');
}

const myFileReader = async (fileName) => {
	let data = await fs.readFile(fileName);
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	let data = await fs.appendFile(fileName, fileContent);
	console.log(data);
	console.log('file updated');
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName);
	console.log('file deleted');
}

myFileUpdater('content.txt','assignment-1');
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }