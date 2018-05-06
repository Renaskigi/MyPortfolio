'use strict';
const dataArr = [];

function Project (data) {
    this.name = data.name;
    this.description = data.description;
}

Project.prototype.displayConsole = function(){
    console.log(this.name);
};


const rawData = [
    {
        name:'Dungeon Fellows',
        description:'Dungeon Fellows is a collaborative project that I took part in building with two other students over a period of three and a half days. It is a simple role-playing/adventure game which allows the player to choose a character and battle monsters for treasure.'
    },
    {
        name:'Ipsum Project',
        description:'ancient alien ufo ancient alien pre-colonial aerodynamics mainstream archaelogy sanskrit, targeted mutation vymaanika-shaastra sightings choral castle cover up, ufo kachina doll sun disc . the answer is a resounding yes... Electromagnetic burmuta triangle mahabharata cover up spaceships mahabharata, space brothers ezekiel petroglyph aircraft vimana ancient alien ancient god , extraterrestrial origin golden disk space brothers sightings ancient religions sightings. star people sumerian texts foo fighter astronaut petroglyph inter-dimensional golden disk, technology sightings anti-gravity weightless mainstream archaelogy easter island nasa. golden disk sightings space brothers choral castle legendary times, seti worm hole space travel chariot of the gods, seti contend earth mound cover up .'
    },

];

rawData.forEach(function (item) {
    dataArr.push(new Project(item));
});

