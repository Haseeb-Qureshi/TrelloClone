TrelloClone.Views.AddCard = Backbone.View.extend({
  addTemplate: JST['cards/add_button'],
  formTemplate: JST['cards/form'],
  className: "add-card",

  events: {
    "click button.card-add": "dropForm",
    "click button.add-btn": "createCard",
    "keyup": "checkEnter",
  },

  render: function () {
    this.$el.html(this.addTemplate());
    return this;
  },

  dropForm: function () {
    this.$el.html(this.formTemplate);
    window.setTimeout(function () {
      $("input").focus();
    }.bind(this), 0);
  },

  checkEnter: function (event) {
    if (event.keyCode === 13) {
      $('.add-btn').click();
    }
  },

  createCard: function (event) {
    event.preventDefault();
    var that = this;
    var newCard = new TrelloClone.Models.Card();
    newCard.set(this.$('form').serializeJSON());
    newCard.save({ list_id: this.model.id }, {
      success: function () {
        that.model.cards.add(newCard);
        that.render();
      }
    });
  },
});
