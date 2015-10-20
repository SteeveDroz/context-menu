$(function() {
  $('*').click(onLeftClick);
  $('*').on('contextmenu', onRightClick);
  
});

function onLeftClick(event) {
  if ($(this).closest('#contextMenu').length === 0) {
    $('#contextMenu').remove();
  }
  else {
    event.stopPropagation();
  }
}

function onRightClick(event) {
  if ($(this).closest('#contextMenu').length > 0) {
    return false;
  }
  onLeftClick(event);
  var context = $(this).closest('[data-context-menu]');
  if (context.length > 0) {
    displayContextMenu(context.data('context-menu'), event);
    return false;
  }
}

function displayContextMenu(menu, event) {
  var contextMenu = $('<div>', {
    'id': 'contextMenu',
    'style': 'left:' + event.pageX + 'px;top:' + event.pageY + 'px;'
  });
  for (action in menu) {
    var link = $('<a>', {
      'text': action
    });
    link.click(onLeftClick);
    link.on('contextmenu', onRightClick);
    link.appendTo(contextMenu);
  }
  contextMenu.click(onLeftClick);
  contextMenu.on('contextmenu', onRightClick);
  contextMenu.appendTo($('body'));
}