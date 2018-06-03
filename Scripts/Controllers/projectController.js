'use strict';

(function(module) {
    const projectController = {};

    projectController.initProjectPage = () => {
        $('#about', '.skill-Wrapperer').hide();
        $('#projects', '#carouselWrapper').fadeIn();
    };
    module.projectController = projectController;
})(window);
