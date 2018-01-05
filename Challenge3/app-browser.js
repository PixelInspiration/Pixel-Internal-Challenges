$(function(){
	//load the json
	$.getJSON('maze1.json', function( data ){
		//convert the data if required
		//data = Array.isArray( data ) ? data : JSON.parse( data );
		
		function refreshMaze(){
			var maze = model.maze();
			model.maze( [] );
			model.maze( maze );
		}

		//display the problem
		var model = new AppModel({
			maze : data
		});

		ko.applyBindings( model );
		//calculate the solution

		//update the display
		refreshMaze();

		var easystar = new EasyStar.js();

		easystar.setGrid(model.maze());
		easystar.setAcceptableTiles(['c']);
		easystar.findPath(7, 0, 7, 14, function( path ) {
			if (path === null) {
				alert("Path was not found.");
			} else {
				console.log(path)
				let m = model.maze()
				_.map(path, (point) => {
					m[point.y][point.x] = 'r'
				})
				refreshMaze();
			}
		});
		easystar.calculate()

	});
});


function AppModel( options ){
	this.maze = ko.observableArray( options.maze || [] );

	this.onClick = function(type, evt){
		console.log(type, evt)
	}
}