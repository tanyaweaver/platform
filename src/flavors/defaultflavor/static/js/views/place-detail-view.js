var PlaceDetailView = require('../../../../../base/static/js/views/place-detail-view.js');

module.exports = PlaceDetailView.extend({
	events: {
    'click .place-story-bar .btn-previous-story-nav': 'onClickStoryPrevious',
    'click .place-story-bar .btn-next-story-nav': 'onClickStoryNext',
    'click .scenario-btn': 'onClickScenarioBtn'
  },
  onClickScenarioBtn: function(e) {
  	$(".scenario-btn").removeClass("btn-selected");
  	$(e.target).addClass("btn-selected");
  }
});