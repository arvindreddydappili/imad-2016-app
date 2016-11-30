var express = require('express');
var morgan = require('morgan');
var path = require('path');

 var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
	'var article-one':{
		title:'articleone|Ard',
		Author:'Ard',
		Datecreated:'Nov/17/16',
		content:"This is going to be first articleThis is going to be first article"
		
	},
	'var article-two':{
		title:'articletwo|Ard',
		Author:'Ard',
		Datecreated:'Nov/18/16',
		content:"This is going to be first articleThis is going to be first article"
		
	},
	 'var article-three':{
		 title:'articlethree|Ard',
		Author:'Ard',
		Datecreated:'Nov/19/16',
		content:"This is going to be first articleThis is going to be first article"
		
	 },
	 'var article-four':{
		 title:'articlefour|Ard',
		Author:'Ard',
		Datecreated:'Nov/20/16',
		content:"This is going to be first articleThis is going to be first article"
		
	 }
};
function reduce(data){
	var title=data.title;
	var Author=data.Author;
	var Datecreated=data.Datecreated;
	var content=data.content;
	var htmltemplate = `
	                   <html>
                             <head>
                                 <title>
                                     ${title}
                                </title>
                            </head>
                            <body>
                            <a href="/">home</a>
                            <div>
                            <p>
  
                                ${Author}
	                            ${Datecreated}
	                            ${content}
	 
                            </p>
                            </div> 
                            </body>
                        </html> `;
            return htmltemplate;
}

app.get('/:articleName',function(req,res){
	var articleName = req.params.articleName;
	res.send(reduce(articles(articleName)));
}
);



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
