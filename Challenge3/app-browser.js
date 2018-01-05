$(function(){
	//load the json
	$.get('maze1.json', function( data ){
		
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
	});
});


function AppModel( options ){
	this.maze = ko.observableArray( options.maze || [] );
}