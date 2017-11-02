export default (editor, config = {}) => {
  const domComponents = editor.DomComponents;
  const type = domComponents.getType('default');
  const model = type.model;
  const view = type.view;

  domComponents.addType('clarity-button', {
    model: model.extend({
        init() {
          this.listenTo(this, 'change:button-type', this.changeButtonType);
        },
        changeButtonType(model, type) {
          this.view.$el.removeClass('btn, btn-primary, btn-link')
          this.view.$el.addClass(type)
        },
        defaults: Object.assign({}, model.prototype.defaults, {
          draggable: '*',
          droppable: false,
          label: 'Button',
          traits: [{
            type: 'select',
            label: 'Type',
            name: 'button-type',
            changeProp: 1,
            options: [
              {value: 'btn btn-primary', name: 'Primary'},
              {value: 'btn btn-link', name: 'Link'}
            ]
          }]
        })
      },
      {
        isComponent: function (el) {
          if ($(el).hasClass('btn')) {
            return { type: 'clarity-button' };
          }
        }
      }),

    view: type.view
    
    // view: view.extend({
    //   init() {
    //     this.listenTo(this, 'change:button-type', this.changeButtonType);
    //     console.log(this)
    //   },
    //   changeButtonType() {
    //     alert(this)
    //   }
    // })
  })
}
