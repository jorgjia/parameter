var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe("Testing URL parameter exercise (drive, alcohol and drink)", function() {
	it("Should return 'You can vote' on /vote/18", function(done) {
		chai.request(app)
			.get("/vote/18")
			.end(function(err, res) {
				res.text.should.equal('You can vote.');
				done();
			});
	});
	
	it("Should return 'You cannot drive a car. ' on /drive/7", function(done) {
		chai.request(app)
			.get("/drive/5")
			.end(function(err, res) {
				res.text.should.equal('You cannot drive a car.');
				done();
			});
	
	});
	
	it ("Should return 'You can drink alcohol' on /alcohol/21", function(done) {
		chai.request(app)
			.get("/alcohol/21")
			.end(function(err, res) {
				res.text.should.equal('You can drink alcohol.');
				done();
			});
	});
});