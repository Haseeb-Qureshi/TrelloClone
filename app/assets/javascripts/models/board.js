TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  constructor: function (options) {
    this.lists = new TrelloClone.Collections.Lists();
    Backbone.Model.apply(this, arguments);
  },

  parse: function (response) {
    var that = this;
    if (response.lists) {
      this.lists.set(response.lists, { parse: true });
      delete response.lists;
    }

    //response.members is also in here
    return response;
  },
});
