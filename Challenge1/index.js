$(function(){
	console.log('body loaded');

	$('[data-action]').on('click', function(){	
		var action = $(this).data('action');	
		
		switch( action ){
			case 'barcode':
				triggerDummyBarcode();
			break;
		}
	});

	//listen for barcode event
	$( document ).on('keydown', function( evt ){
		evt = evt.originalEvent || evt;
		pushKey( evt.key );
	});

	var timeoutTriggerBarcode, keys = '';
	function pushKey( key ){
		cancelTimeoutTriggerBarcode();

		if( key == "Enter" ){
			triggerBarcode( keys );
		}else{
			keys += key;
			timeoutTriggerBarcode = setTimeout( function(){
				triggerBarcode( keys );	
			}, 250 );
		}
	}

	function triggerBarcode( barcode ){
		keys = '';
		alert( barcode );
	}

	function cancelTimeoutTriggerBarcode(){
		if( timeoutTriggerBarcode ){
			clearTimeout( timeoutTriggerBarcode );
			delete timeoutTriggerBarcode;
		}
	}
});

function triggerDummyBarcode(){
	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	var numChars = 10;
	_.times( numChars, index => {
		var evt = jQuery.Event("keydown");
		evt.key = index == numChars - 1 ? 'Enter' : chars[ Math.floor( Math.random() * chars.length ) ]; // # Some key code value
		setTimeout( function(){
			$( document ).trigger( evt );
		}, index * 10 );
	} )
}
