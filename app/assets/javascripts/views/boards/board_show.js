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
    this.onRender();
    return this;
  },

  onRender: function () {
    var that = this;
    window.setTimeout(function () {
      $(".lists").sortable({
        connectWith: ".lists",
        remove: function (event, ui) {
        },
        receive: function (event, ui) {
          var newList = ui.sender;
          var newOrd = ui.position;
          debugger
          // var card = that.model.cards.get(ui.item.attr('id'));
          // DO MORE STUFF HERE TO MAKE THIS WORK. doesn't work yet.
        },
        update: function (event, ui) {
          var newList = ui.sender;
          var newOrd = ui.position;
          debugger
        }
      }).disableSelection();
    }, 0);
  },

  addList: function (list) {
    var subView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists", subView);
  },
});
