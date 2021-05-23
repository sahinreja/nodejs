const {readFile , writeFile, read} = require('fs');
console.log('Start');
readFile('./content/first.txt' , 'utf-8' , (err,result)=>{
   if(err){
      console.log(err);
      return;
   }
   console.log(result);
   const first = result;
   readFile('./content/second.txt' , 'utf-8' , (err,result)=>{
      if(err){
         console.log(err);
         return;
      }
      console.log(result);
      const second = result;
      writeFile('./content/sync.txt', `Here is the result : ${first} , ${second} ` ,(err,result)=>{
         if(err){
            console.log(err);
            return;
         }
         console.log('Done with the task');
      })
   })
})
console.log('Starting new one');

