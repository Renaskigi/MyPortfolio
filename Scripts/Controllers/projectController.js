'use strict';

(function(module) {
    const projectController = {};

    projectController.initProjectPage = () => {
        $('#about', '.skill-Wrapperer').hide();
        $('#projects', '#carouselWrapper').fadeIn();
        projectView.fetchAll();
    };
    module.projectController = projectController;
})(window);
