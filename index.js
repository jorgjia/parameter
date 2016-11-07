var express = require('express');
var app = new express();
var message;

app.use(express.static('public'));

app.get("/alcohol/:age", function(req, res) {
	
	if (Number(req.params.age)) {
		if (Number(req.params.age) >= 21) message = "You can drink alcohol.";
		else message = "You cannot drink.";
	}
	else message = "enter age.";
	
	res.send(message);
	
});

app.get("/drive/:age", function(req, res) {
	
	if (Number(req.params.age)) {
		if (Number(req.params.age) >= 16) message = "You can drive a car.";
		else message = "You cannot drive a car.";
	}
	else message = "enter age.";
	
	res.send(message);
	
});

app.get("/vote/:age", function(req, res) {
	
	if (Number(req.params.age)) {
		if (Number(req.params.age) >= 18) message = "You can vote.";
		else message = "You cannot vote.";
	}
	else message = "Please enter a correct age.";
	
	res.send(message);
	
});

app.listen(process.env.PORT || 8050);

exports.app = app;