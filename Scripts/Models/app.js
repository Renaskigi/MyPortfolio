'use strict';

const projectView = {};

function Project (data) {
    this.name = data.name;
    this.completed = data.completed;
    this.description = data.description;
    this.screenshot = data.screenshot;
    this.projectID = data.projectID;
}
Project.all = [];

Project.prototype.toHtml = function() {
    const template = $('#project-template').html();
    const compile = Handlebars.compile(template);
    return compile(this);
};

Project.prototype.toCarousel = function() {
    const template = $('#carousel-template').html();
    const compile = Handlebars.compile(template);
    return compile(this);
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

Project.loadAll = function(projexIpsum) {
    projexIpsum.forEach(function (project) {
        Project.all.push(new Project(project));
    });
};

Project.initIndexPage = function() {
    Project.all.forEach(function(projex) {
        $('#projects').append(projex.toHtml());
        $('.carousel').append(projex.toCarousel());
    });
};

$(document).ready(function(){
    $('.icon-menu').on('click', function() {
        $(this).toggleClass('icon-menu icon-happy2');
    });
});

$('#projectlink').on('click', function() {
    $('#about, #aboutpara, .skillSet').hide();
    $('#projects, .carousel, .carousel-options, #carouselWrapper, #project-template').show();
});

$('#aboutlink').on('click', function() {
    $('#projects, .projectClass, #carouselWrapper, .carousel-options, #project-template').hide();
    $('#about, #aboutpara,.skillSet').show();
});

$('.carousel').on('click', 'img', (event) => {
    const projectID = event.target.dataset.projectid;
    console.log(projectID);
    $('.projectClass').hide();
    $(`#${projectID}`).show();
});
