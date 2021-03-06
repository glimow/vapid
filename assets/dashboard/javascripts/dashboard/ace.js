require('ace-builds');

document.addEventListener("turbolinks:load", () => {
  // Ace Editor
  $('.ace_editor').each(function () {
    const $editor = $(this);
    const $textarea = $editor.next('textarea');
    const editor = ace.edit(this);

    $editor.height(300);
    $textarea.hide();

    editor.getSession().setUseWrapMode(true);
    editor.getSession().setValue($textarea.val());

    editor.getSession().on('change', () => {
      $textarea.val(editor.getSession().getValue());
    });
  });
});
