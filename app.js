'use strict';
const dataArr = [];

function Project (data) {
    this.name = data.name;
    this.completed = data.completed;
    this.description = data.description;
}

Project.prototype.displayConsole = function(){
    console.log(this.name);
};

Project.prototype.toHtml = function() {
    const $newProject = $('article.template').clone();
    $newProject.removeClass('template');
    $newProject.find('.name').text(this.name);
    $newProject.find('.description').html(this.description);
    return $newProject;
};

rawData.forEach(function (project) {
    dataArr.push(new Project(project));
});

dataArr.forEach(function(project) {
    $('#project-template').append(project.toHtml());
});

$(document).ready(function(){
    $('.icon-menu').on('click', function() {
        $(this).toggleClass('icon-menu icon-happy2');
    });
});
