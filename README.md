OpenWindow
==========

Tired of having to do popups to share? This plugin will help you make popups for your custom buttons to share or any other site you want to open a dialog window.
You can check all the infomation at <a href="http://plugins.mononelo.es/openwindow/" target="_blank">plugins.mononelo.es/openwindow</a>


This is how you have to write the link...

	<a class="openwindow" href="http://mononelo.es/">Open mononelo.es</a>

...and the plugin turn into this:

	<a href="javascript:void(0);" onclick="javascript:openWindow( 'http://mononelo.es/', 500, 300 );">Open mononelo.es</a>

Also you could set the width and height of the new dialog, like this:

	<a class="openwindow" href="http://mononelo.es/" data-width="800" data-height="600">Open mononelo.es</a>

The function that does this is very simple:

	function windowOpener(){
		$('a.openwindow').each(function(){
			var width, height, url;
			if($(this).attr('data-width’)){
				width = $(this).attr('data-width’);
				$(this).removeAttr('data-width’);
			}else{
				width = 500;
			}
			if($(this).attr('data-height’)){
				height = $(this).attr('data-height’);
				$(this).removeAttr('data-height’);
			}else{
				height = 300;
			}
			url = $(this).attr('href’);
			$(this).attr('href’,’javascript:void(0);’);
			$(this).attr('onClick’,’javascript:openWindow(\''+url+'\',\''+width+'\',\''+height+’\’);’);
			if($(this).attr('target')) $(this).removeAttr('target');
		});
	}

And after that the other function that we need is openWindow():

	function openWindow(url,width,height) {
		if(window.showModalDialog) {
			window.showModalDialog(url,'Open Window’,’dialogWidth:’+width+'px;dialogHeight:’+height+'px’);
		} else {
			window.open(url,'Open Window’,’height=‘+height+',width=‘+width+',toolbar=no,directories=no,status=no, linemenubar=no,scrollbars=no,resizable=no,modal=yes’);
		}
	}