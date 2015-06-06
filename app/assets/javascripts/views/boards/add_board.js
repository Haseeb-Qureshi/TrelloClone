TrelloClone.Views.AddBoard = Backbone.View.extend({
  addTemplate: JST['boards/add_button'],
  formTemplate: JST['boards/form'],
  className: "add-board",

  events: {
    "click button.board-add": "dropForm",
    "blur input": "createBoard",
  },

  render: function () {
    this.$el.html(this.addTemplate());
    return this;
  },

  dropForm: function () {
    this.$el.html(this.formTemplate);
  },

  createBoard: function (event) {
    event.preventDefault();
    var that = this;
    var newBoard = new TrelloClone.Models.Board();
    newBoard.set(this.$('form').serializeJSON());
    newBoard.save({}, {
      success: function () {
        TrelloClone.boards.add(newBoard);
        that.render();
      }
    });
  },
});
