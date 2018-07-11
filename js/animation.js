jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn',
	    offset: 100    
	   }); 
	jQuery('.postmenu').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInDown',
	    offset: 100    
	   });  
}); 