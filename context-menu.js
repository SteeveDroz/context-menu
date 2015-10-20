$(function() {
  // Replaces context menu
  $('*').on('contextmenu', function(e){
    var context = $(this).closest('[data-context-menu]');
    displayContextMenu(context.data('context-menu'));
    if (context.length > 0) {
      return false;
    }
  });
  
});

function displayContextMenu(menu) {
  for (action in menu) {
    console.log(action);
    console.log(menu[action]);
  }
}