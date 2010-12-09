jQuery(document).ready(function(){
	jQuery('.conv').css('width', '100%');
	
	
	replaceMap = [
		{from:/ /g, to: '+'},
		{from:/ä/g, to: 'ae'},
		{from:/Ä/g, to: 'Ae'},
		{from:/ö/g, to: 'oe'},
		{from:/Ö/g, to: 'Oe'},
		{from:/ü/g, to: 'ue'},
		{from:/Ü/g, to: 'Ue'},
		{from:/ß/g, to: 'ss'},
		{from:/\n/g, to: ''},
	]
	function onChange(eventObject){
		source = jQuery(eventObject.target).attr('value');
		result = source;
		
		jQuery(replaceMap).each(function(index, element){
			result = result.replace(element['from'], element['to']);
			console.log('replace ' + element['from'] + ' to ' + element['to']);
			
			/*jQuery(element).each(function(i, e){
				console.log('###replace ' + i + ' to ' + e);
			});*/
		});
		for (var r in replaceMap) {
			/*jQuery(r).each(function(index, element){
				result = result.replace(index, element);
				console.log('replace ' + index + ' to ' + element);
			});*/
			/*for (var k in replaceMap[r]) {
				result = result.replace(r, replaceMap[r]);
				console.log('replace ' + k + ' to ' + r[k]);
			}*/
		}
		jQuery('#result').attr('value', result);
	}
	jQuery('#src').change(onChange).keyup(onChange);
	
	jQuery('#src').change();
});