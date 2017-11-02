export default (editor, config = {}) => {
  const blockManager = editor.BlockManager;

  blockManager.add('clarity-btn', {
    label: 'Button',
    content: '<a class="btn btn-primary">Button</a>',
  });
}
