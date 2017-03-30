var LandmarkDetailView = require('../../../../../base/static/js/views/landmark-detail-view.js');

module.exports = LandmarkDetailView.extend({
  render: function() {
    var self = this,
        data = {
          description: this.description,
          story: this.model.attributes.story,
          title: this.model.attributes.title,
          fullTitle: this.model.attributes.fullTitle
        };

    // add the story navigation bar
    this.$el.html(Handlebars.templates['place-detail-story-bar'](data));

    this.$el.html(Handlebars.templates['scenario-selector-bar']);

    this.$el.append((this.model.attributes.story) ? this.description : this.originalDescription);
    // Render the view as-is (collection may have content already)
    this.$('.survey').html(this.landmarkSurveyView.render().$el);

    // add the story navigation bar again, at the bottom of the view
    this.$el.append(Handlebars.templates['place-detail-story-bar-tagline'](data));

    this.delegateEvents();

    $("#content article").animate({ scrollTop: 0 }, "fast");

    $(".scenario-btn").removeClass("btn-selected");
    $('.scenario-btn[href="/' + Backbone.history.getFragment() + '"]').addClass("btn-selected");

    return this;
  }

});
