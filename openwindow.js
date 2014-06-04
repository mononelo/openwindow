
	
	/*
	 * Open Window
	 * Author:			Pol EScarpenter (a.k.a. mononelo)
	 * Date:			04-06-14
	 * URL:				http://plugins.mononelo.es/openwindow/
	 * Version:			1.0
	 * 
	 * A simple jQuery powered plugin
	 */

	$(document).ready(function(e) {
		windowOpener();    
	});
	
	function windowOpener(){
		$('a.openwindow').each(function(){
			var width, height, url;
			if($(this).attr('data-width')){
				width = $(this).attr('data-width');
				$(this).removeAttr('data-width');
			}else{
				width = 500;
			}
			if($(this).attr('data-height')){
				height = $(this).attr('data-height');
				$(this).removeAttr('data-height');
			}else{
				height = 300;
			}
			url = $(this).attr('href');
			
			$(this).attr('href','javascript:void(0);');
			$(this).attr('onClick','javascript:openWindow(\''+url+'\',\''+width+'\',\''+height+'\');');
			
			if($(this).attr('target')) $(this).removeAttr('target');
		});
	}
	
	function openWindow(url,width,height) {
		if (window.showModalDialog) {
			window.showModalDialog(url,'Open Window','dialogWidth:'+width+'px;dialogHeight:'+height+'px');
		} else {
			window.open(url,'Open Window','height='+height+',width='+width+',toolbar=no,directories=no,status=no, linemenubar=no,scrollbars=no,resizable=no,modal=yes');
		}
	}