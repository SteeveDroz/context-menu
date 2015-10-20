$(function() {
  // Replaces context menu
  $('*').on('contextmenu', function(e){
    console.log('CONTEXT-MENU');
    var context = $(this).closest('[data-context-menu]');
    console.log(context);
    if (context.length > 0) {
      return false;
    }
  });
  
});