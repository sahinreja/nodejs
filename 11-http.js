const http = require('http');
const url = require('url')
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
   // console.log(req.url);
   if(req.url === '/'){
      res.end('Welcome to our Home page');
   }
   else if(req.url === '/about'){
      res.end('Here is the about page');
   }
   else{
     res.end(`
     <h1>Opps!</h1>
     <p>We can't seem to find that page you are looking for</p>
     <a href="/">Back to Home</a>
     `);
   }
});

server.listen(port , (err)=>{
   if(err){
      console.log(err);
      return;
   }
   console.log(`Server is running ${port}`);
})