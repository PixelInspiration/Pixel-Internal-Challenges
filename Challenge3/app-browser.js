$(function () {
	//load the json
	$.getJSON('maze1.json', function (data) {

		var easystar = new EasyStar.js();
		easystar.setGrid(data);
		easystar.setAcceptableTiles(['c']);
		easystar.findPath(7, 0, 7, 14, function (path) {
			if (path === null) {
				alert("Path was not found.");
			} else {
				path.map((point) => {
					data[point.y][point.x] = 'r'
				})

				//create model with modded data
				var model = new AppModel({
					maze: data
				});

				ko.applyBindings(model);
			}
		});
		easystar.calculate()

	});
});


function AppModel(options) {
	this.maze = ko.observableArray(options.maze || []);

	this.onClick = function (type, evt) {
		console.log(type, evt)
	}
}