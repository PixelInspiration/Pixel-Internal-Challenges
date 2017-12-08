$(function(){
	console.log('body loaded');

	ko.applyBindings( new Game() );
});

function Game(){
	var self = this;

	self.numRows = 3;
	self.numColumns = 3;
	self.grids = ko.observableArray( _.times( self.numRows, ( indexRow ) => {
		return _.times( self.numColumns, ( indexColumn ) => {
			return {x:indexRow,y:indexColumn,state:null};
		} )
	} ) );
	self.player = ko.observable( 'player1' );

	self.checkForWinner = function(){
		console.log('checkForWinner');
		var grids = self.grids();
		var winner = null;

		_.each( grids, ( rows, indexColumn ) => {
			_.each( rows, ( grid, indexRow ) => {
				console.log( grid, indexColumn, indexRow );
			} )
		} )
		//use lodash to loop through all the grids and determine if there is currently a winner
		return false;
	}
	
	self.switchPlayer = function(){
		var player = self.player();
		self.player( player == 'player1' ? 'player2' : 'player1' );
	}
	
	self.onClick = function( data ){
		if( !data.state ){
			//update the state and then assess state
			data.state = self.player();
			
			var grids = self.grids();
			self.grids([]);
			self.grids(grids);
		
			var winner = self.checkForWinner();
			if( winner ){
				alert( `'${winner}' has won` );
			}else{
				self.switchPlayer();
			}
		}
	}
}


