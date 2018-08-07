jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated zoomIn',
	    offset: 100    
	   }); 
	jQuery('.animate-header').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated flipInX',
	    offset: 100    
	   });  
}); 