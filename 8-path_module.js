//another build-in module name is path

const path = require('path')
console.log(path);
console.log(path.sep);

const filePath = path.join('/content' , 'subfolder' ,'text.txt');
const basename = path.basename(filePath)
console.log(basename);
console.log(path.basename(filePath));
const dirname = path.dirname(filePath)
console.log(dirname);

const absolutePath = path.resolve(__dirname , 'content' , 'subfolder','text.txt');
console.log(absolutePath);