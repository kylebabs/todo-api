var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Pick up dry cleaning',
	completed: false
},{
	id: 2,
	description: 'Go to Westside Market',
	completed: false
},
{
	id: 3,
	description: 'Have coffee',
	completed: true
}];

app.get('/', function(req, res){
	res.send('Todo API Root');
});

//GET /todos
app.get('/todos', function(req, res){
	res.json(todos);
});
//GET /todos/:id
app.get('/todos/:id', function(req,res){
	var todoId = parseInt(req.params.id,10);
	var matchedTodo;
	for (var i=0; i<todos.length; i++){
		if (todos[i].id === todoId){
			matchedTodo = todos[i];
		} 
	}
	if (matchedTodo){
		res.json(matchedTodo);
	} else { 
		res.status(404).send();
	}
});

app.listen(PORT, function () {
	console.log('Express listening on port '+ PORT + '...');
});