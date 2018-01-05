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
	});
});


function AppModel( options ){
	this.maze = ko.observableArray( options.maze || [] );
}

console.log('rob')