TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function (response) {
    if (response.lists) {
      this.lists = new TrelloClone.Collections.Lists({
        collection: response.lists,
        parse: true
      });
      delete response.lists;
    }

    // if (response.members) {      MEMBERS ASSOCIATION
    //   this.members = new TrelloClone.Collections.Lists({
    //     collection: response.lists,
    //     parse: true
    //   });
    //   delete response.lists;
    // }
  },
});
