'use strict';

(function(module) {
    const aboutController = {};

    aboutController.initAboutPage = () => {
        repoView.index();
    };

    module.aboutController = aboutController;
})(window);
