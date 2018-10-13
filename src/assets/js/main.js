$( document ).ready(function() {

  var $width = $( window ).width();
  if (991 >= $width && $width  >= 768) {
    $('body').toggleClass('open');
  }

  $( window ).resize(function() {
    var $width = $( window ).width();
    if (991 >= $width && $width  >= 768) {
      $('body').toggleClass('open');
    }
  });

  $('#menuToggle').on('click', function(event) {
    $('body').toggleClass('open');
  });

  $('.toggle-link').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(300,
      function(){
        $('#new-acc-modal')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('#modal_close, #overlay').click( function(){
    $('#new-acc-modal')
    .animate({opacity: 0, top: '45%'}, 200,
      function(){
        $(this).css('display', 'none');
        $('#overlay').fadeOut(300);
      }
      );
  });
  $('.icon-menu').click(function() {
    if ($('.top-menu').css('display') == 'none') {
      $('.top-menu').slideDown(300);
      $(this).addClass('active');
    } else {
      $('.top-menu').slideUp(300);
      $(this).removeClass('active');
    }
  });
});

function initToolbarBootstrapBindings() {
  var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
  'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
  'Times New Roman', 'Verdana'],
  fontTarget = $('[title=Font]').siblings('.dropdown-menu');
  $.each(fonts, function (idx, fontName) {
    fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
  });
  $('a[title]').tooltip({container:'body'});
  $('.dropdown-menu input').click(function() {return false;})
  .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
  .keydown('esc', function () {this.value='';$(this).change();});

  $('[data-role=magic-overlay]').each(function () {
    var overlay = $(this), target = $(overlay.data('target'));
    overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
  });
  if ("onwebkitspeechchange"  in document.createElement("input")) {
    var editorOffset = $('#editor').offset();
    $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
  } else {
    $('#voiceBtn').hide();
  }
};
function showErrorAlert (reason, detail) {
  var msg='';
  if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
  else {
    console.log("error uploading file", reason, detail);
  }
  $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+
    '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
};
initToolbarBootstrapBindings();
$('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
window.prettyPrint && prettyPrint();

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 500, 6000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "от " + ui.values[ 0 ] + " P" + " - до " + ui.values[ 1 ] + " P" );
    }
  });
  $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) + " P" +
    " - до " + $( "#slider-range" ).slider( "values", 1 ) + " P" );
} );

$( function() {
  $( "#slider-range1" ).slider({
    range: true,
    min: 0,
    max: 240,
    values: [ 20, 120 ],
    slide: function( event, ui ) {
      $( "#amount1" ).val( "от " + ui.values[ 0 ] + "мин" + " - до " + ui.values[ 1 ] + " мин" );
    }
  });
  $( "#amount1" ).val( "от " + $( "#slider-range1" ).slider( "values", 0 ) + " мин" +
    " - до " + $( "#slider-range1" ).slider( "values", 1 ) + " мин" );
} );

