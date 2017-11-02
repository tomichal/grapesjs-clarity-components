export default (editor, config = {}) => {
  const blockManager = editor.BlockManager;

  blockManager.add('clarity-button', {
    label: "Button",
    content: '<a class="btn btn-primary">Button</a>',
  });
}
