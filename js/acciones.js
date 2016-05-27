// JavaScript Document
var audio;
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		audio = window.plugins.LowLatencyAudio;
		audio.preloadFX('do', 'audio/DO.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('re', 'audio/RE.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('mi', 'audio/MI.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('fa', 'audio/FA.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('sol', 'audio/SOL.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('la', 'audio/LA.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('si', 'audio/SI.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		
		audio.preloadFX('doSos', 'audio/DO#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('reSos', 'audio/RE#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('faSos', 'audio/FA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('solSos', 'audio/SOL#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('laSos', 'audio/LA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('doSSos', 'audio/DO#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('reSSos', 'audio/RE#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('faSSos', 'audio/FA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('solSSos', 'audio/SOL#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('laSSos', 'audio/LA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		$('.nota').bind('touchstart', function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
		$('.nota1').bind('touchstart', function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
	});
});