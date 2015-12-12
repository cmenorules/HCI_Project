// JavaScript Document

$(document).ready(function($) {
    $('.datepicker').datepicker({
      format: 'mm-dd-yyyy'
    });
});

$(document).ready(function($) {	
    $('.datepicker').val(new Date().toLocaleDateString());	
});