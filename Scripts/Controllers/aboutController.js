'use strict';

(function(module) {
    const aboutController = {};

    aboutController.initAboutPage = () => {
        $('#projects', '#carouselWrapper').hide();
        $('#about').fadeIn();
        $('.skill-wrapper').fadeIn();
    };

    module.aboutController = aboutController;
})(window);
