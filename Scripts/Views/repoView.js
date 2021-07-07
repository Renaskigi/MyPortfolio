'use strict';

(function(module) {
    const repoView = {};

    const ui = function() {
        // const $about = $('#about');
        // $about.show().siblings().hide();
        $('#projects', '#carouselWrapper').hide();
        $('#about').fadeIn();
        $('.skill-wrapper').fadeIn();
    };

    const render = Handlebars.compile($('#repo-template').text());
    repoView.index = function() {
        ui();

        $('#about').append(
            repos.with('name').map(render)
        );
    };
    repos.requestRepos();
    module.repoView = repoView;
})(window);
