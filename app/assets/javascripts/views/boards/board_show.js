TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  className: "container",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists, "add", this.addList);
    this.model.lists.each(this.addList.bind(this));
    this.addSubview("div.add-list-container", new TrelloClone.Views.AddList({
      collection: this.model.lists,
      model: this.model,
    }));
  },

  events: {
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    return this;
  },

  addList: function (list) {
    var subView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists", subView);
  },
});
