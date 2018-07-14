jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn',
	    offset: 100    
	   }); 
	jQuery('.animate-header').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated flipInX',
	    offset: 100    
	   });  
}); 