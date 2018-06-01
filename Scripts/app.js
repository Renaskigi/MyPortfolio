'use strict';

const projectView = {};

function Project (data) {
    this.name = data.name;
    this.completed = data.completed;
    this.description = data.description;
}
Project.all = [];

Project.prototype.toHtml = function() {
    const template = $('#project-template').html();
    const compile = Handlebars.compile(template);
    $('#projects').append(compile(this));
};

Project.initIndexPage = function() {
    Project.all.forEach(function(projex) {
        $('#project-template').append(projex.toHtml());
    });
};

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

Project.loadAll = function(projexIpsum) {
    projexIpsum.forEach(function (project) {
        Project.all.push(new Project(project));
    });
};

projectView.fetchAll = function() {
    if (localStorage.projexIpsum) {
        Project.loadAll(JSON.parse(localStorage.projexIpsum));
        Project.initIndexPage();
    } else {
        $.ajax({
            type: 'GET',
            url: '../Data/projex.json',
            success: function(projexIpsum) {
                localStorage.setItem('projexIpsum', JSON.stringify(projexIpsum));
                Project.loadAll(projexIpsum);
                Project.initIndexPage();
            }
        });
    }
};

