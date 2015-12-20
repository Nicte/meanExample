var User = require('./models/user.js');

module.exports = function (app) {

	// server routes ===========================================================
	// GET users
	app.get('/api/users', function (req, res, next) {
		// use mongoose to get all users in the database
		User.find(function (err, users) {
			if (err) return next(err);
			res.json(users); // return all users in JSON format
		});
	});

	//Get user by ID
	app.get('/api/users/:id', function (req, res, next) {
		User.findById(req.params.id, function (err, user) {
			if (err) return next(err);
			res.json(user);
		});
	});

	//Create new user
	app.post('/api/users', function (req, res, next) {
		// TODO make name mandatory. Maybe using mongoose schema?
		User.create(req.body, function (err, user) {
			if (err) return next(err);
			res.json(user);
		});
	});

	// Update User by ID
	app.put('/api/users/:id', function (req, res, next) {
		User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
			if (err) return next(err);
			res.json(user);
		});
	});
	
	// Delete User by ID
	app.delete('/api/users/:id', function (req, res, next) {
		User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
			if (err) return next(err);
			res.json(user);
		});
	});

	// frontend routes =========================================================
	// index
	app.get('/', function (req, res, next) {
		res.sendFile(__dirname + '/views/index.html');
	});
	
	// Error handler
	app.use(function (err, req, res, next) {
		res.status(err.status || 500).send(err.message);
	});
};
