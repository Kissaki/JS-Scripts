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
		{from:/[^a-zA-Z0-9]/g, to: '-'},
	]
	function onChange(eventObject){
		source = jQuery(eventObject.target).attr('value');
		result = source;
		
		jQuery(replaceMap).each(function(index, element){
			result = result.replace(element['from'], element['to']);
		});
		jQuery('#result').attr('value', result);
	}
	jQuery('#src').change(onChange).keyup(onChange);
	
	jQuery('#src').change();
});