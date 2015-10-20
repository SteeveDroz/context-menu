$(function() {
  // Replaces context menu
  $(document).on('contextmenu', function(e){
    console.log('CONTEXT-MENU');
    return false;
  });
});