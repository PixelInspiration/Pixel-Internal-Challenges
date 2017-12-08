$(function(){
	console.log('body loaded');

	ko.applyBindings( new Game() );
});

function Game(){
	var self = this;

	self.numRows = 3;
	self.numColumns = 3;
	/*
		Build the grids as an array with an array to give us this
		
		gridAtXY = self.grids()[x][y]
	*/

	self.grids = ko.observableArray( _.times( self.numRows, ( indexRow ) => {
		return _.times( self.numColumns, ( indexColumn ) => {
			return {x:indexRow,y:indexColumn,state:null};
		} )
	} ) );

	//store the state of the current player
	self.player = ko.observable( 'player1' );

	self.checkForWinner = function(){
		//check for winners by determining the state of the grids
		var grids = self.grids();
		var winner = null;

		_.each( grids, ( rows, indexColumn ) => {
			_.each( rows, ( grid, indexRow ) => {
				console.log( grid, indexColumn, indexRow );
			} )
		} )
		//use lodash to loop through all the grids and determine if there is currently a winner
		return winner;
	}
	
	//toggle the current player
	self.switchPlayer = function(){
		var player = self.player();
		self.player( player == 'player1' ? 'player2' : 'player1' );
	}
	
	//handle the clicking of a grid
	self.onClick = function( grid ){
		if( !grid.state ){
			//update the state and then assess state
			grid.state = self.player();
			
			//hacky way to get knockout to re-render the html
			//it's not correct - if someone wants to demonstrate 
			//the correct to do this for bonus points feel feel
			var grids = self.grids();
			self.grids([]);
			self.grids(grids);
		
			//determine if there is a winner
			var winner = self.checkForWinner();
			if( winner ){
				alert( `'${winner}' has won` );
				//reset the game back to it's initial state
			}else{
				self.switchPlayer();
			}
		}
	}
}


