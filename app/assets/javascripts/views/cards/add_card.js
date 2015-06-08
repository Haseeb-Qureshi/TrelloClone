TrelloClone.Views.AddBoard = Backbone.View.extend({
  addTemplate: JST['cards/add_card'],
  formTemplate: JST['cards/form'],
  className: "add-card",

  events: {
    "click button.card-add": "dropForm",
    "blur input": "createCard",
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

  createCard: function (event) {
    event.preventDefault();
    var that = this;
    var newCard = new TrelloClone.Models.Card();
    newCard.set(this.$('form').serializeJSON());
    newCard.save({ list_id: this.model.id }, {
      success: function () {
        that.collection.add(newCard);
        that.render();
      }
    });
  },
});
