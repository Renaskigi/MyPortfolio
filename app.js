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
    const $newProject = $('#project.template').clone();
    $newProject.removeClass('template');
    $newProject.find('.template-title').text(this.title);
    $newProject.find('.article-body').html(this.body);
};

rawData.forEach(function (project) {
    dataArr.push(new Project(project));
});

rawData.forEach(function(project) {
    $('#articles').append(project.toHtml());
});