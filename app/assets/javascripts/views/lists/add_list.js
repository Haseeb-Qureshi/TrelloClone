TrelloClone.Views.AddList = Backbone.View.extend({
  addTemplate: JST['lists/add_button'],
  formTemplate: JST['lists/form'],
  className: "add-list",

  events: {
    "click div.list-add": "dropForm",
    "blur input": "createList",
    "submit": "handleSubmit"
  },

  render: function () {
    this.$el.html(this.addTemplate());
    return this;
  },

  dropForm: function () {
    this.$el.html(this.formTemplate);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    this.$("input").blur();
  },

  createList: function (event) {
    event.preventDefault();
    var that = this;
    var newList = new TrelloClone.Models.List();
    newList.set(this.$('form').serializeJSON());
    newList.save({ board_id: this.model.id }, {
      success: function () {
        that.collection.add(newList);
        that.render();
      }
    });
  },
});
