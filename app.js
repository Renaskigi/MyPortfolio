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
    const template = $('#project-template').html();
    const compile = Handlebars.compile(template);
    $('#projects').append(compile(this));
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

$('#projectlink').on('click', function() {
    $('#about').hide();
    $('#aboutpara').hide();
    $('.skill-wrapper').hide();
    $('.skillSet').hide();
    $('#projects').show();
    $('.carousel').show();
    $('.carousel-options').show();
    $('#project-template').show();
});

$('#aboutlink').on('click', function() {
    $('#projects').hide();
    $('#project-template').hide();
    $('.carousel').hide();
    $('.carousel-options').hide();
    $('#about').show();
    $('#aboutpara').show();
    $('.skill-wrapper').show();
    $('.skillSet').show();
});

