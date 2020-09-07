
$('#menu-button').click(function(){
    $('#nav-bar').slideToggle('slow');
    $('#top').toggleClass('open1')
    $('#middle').toggleClass('open2')
    $('#bottom').toggleClass('open3')
    //$('menu-button').toggleClass('red')
})

$('document').ready(function(){
    $('#blur').fadeIn(1500)
    englishText();
})

function englishText(){
    $('#home-button a').text(english.header.listItems[0]);
    $('#about-button a').text(english.header.listItems[1]);
    $('#projects-button a').text(english.header.listItems[2]);
    $('#contact-button a').text(english.header.listItems[3]);
    $('#nav-bar h3').html(english.header.listItems[4])

    $('#blur div h2').text(english.main.mainTitle);

    $("#description-div h2").text(english.about.title)
    $("#para1").text(english.about.paragraph1)
    $("#para2").text(english.about.paragraph2)
    $("#para3").text(english.about.paragraph3)
    $('#journey').text(english.about.journey)
    $("#para4").html(english.about.paragraph4)
    $("#para5").html(english.about.paragraph5)

    $('#projects h2').text(english.projects.title)
    $('#project1 h2').text(english.projects.projectOne.title)
    $('#project1 img').attr('src', english.projects.projectOne.image)
    $('#project1 a').attr('href', english.projects.projectOne.url)
    $('#project1 img').attr('alt', english.projects.projectOne.alt)
    $('#project1 p').text(english.projects.projectOne.description)

    $('#project2 h2').text(english.projects.projectTwo.title)
    $('#project2 img').attr('src', english.projects.projectTwo.image)
    $('#project2 a').attr('href', english.projects.projectTwo.url)
    $('#project2 img').attr('alt', english.projects.projectTwo.alt)
    $('#project2 p').text(english.projects.projectTwo.description)

    $('#project3 h2').text(english.projects.projectThree.title)
    $('#project3 img').attr('src', english.projects.projectThree.image)
    $('#project3 a').attr('href', english.projects.projectThree.url)
    $('#project3 img').attr('alt', english.projects.projectThree.alt)
    $('#project3 p').text(english.projects.projectThree.description)

    $('#project4 h2').text(english.projects.projectFour.title)
    $('#project4 img').attr('src', english.projects.projectFour.image)
    $('#project4 a').attr('href', english.projects.projectFour.url)
    $('#project4 img').attr('alt', english.projects.projectThree.alt)
    $('#project4 p').text(english.projects.projectFour.description)

    $('#references h2').text(english.references.title)
    $("#reference1 p").text(english.references.initial)
    $("#reference2 p").text(english.references.equator)
    $("#reference3 p").text(english.references.beerworks)

    $('#contact h2').text(english.contact.title)
    $('#name').attr('placeholder', english.contact.name)
    $('#email').attr('placeholder', english.contact.email)
    $('#message').attr('placeholder', english.contact.message)
    $('#send').attr('value', english.contact.submit)
    $('#contact h2').text(english.contact.title)

    $('#social-media h2').text(english.contact.footer.h2)
    $('#social-media h3').html(english.contact.footer.h3)

}

function spanishText(){
    $('#home-button a').text(spanish.header.listItems[0]);
    $('#about-button a').text(spanish.header.listItems[1]);
    $('#projects-button a').text(spanish.header.listItems[2]);
    $('#contact-button a').text(spanish.header.listItems[3]);
    $('#nav-bar h3').html(spanish.header.listItems[4])

    $('#blur div h2').text(spanish.main.mainTitle);

    $("#description-div h2").text(spanish.about.title)
    $("#para1").text(spanish.about.paragraph1)
    $("#para2").text(spanish.about.paragraph2)
    $("#para3").text(spanish.about.paragraph3)
    $("#para4").html(spanish.about.paragraph4)
    $("#para5").html(spanish.about.paragraph5)

    $('#projects h2').text(spanish.projects.title)
    $('#project1 h2').text(spanish.projects.projectOne.title)
    $('#project1 img').attr('src', spanish.projects.projectOne.image)
    $('#project1 a').attr('href', spanish.projects.projectOne.url)
    $('#project1 img').attr('alt', spanish.projects.projectOne.alt)
    $('#project1 p').text(spanish.projects.projectOne.description)

    $('#project2 h2').text(spanish.projects.projectTwo.title)
    $('#project2 img').attr('src', spanish.projects.projectTwo.image)
    $('#project2 a').attr('href', spanish.projects.projectTwo.url)
    $('#project2 img').attr('alt', spanish.projects.projectTwo.alt)
    $('#project2 p').text(spanish.projects.projectTwo.description)

    $('#project3 h2').text(spanish.projects.projectThree.title)
    $('#project3 img').attr('src', spanish.projects.projectThree.image)
    $('#project3 a').attr('href', spanish.projects.projectThree.url)
    $('#project3 img').attr('alt', spanish.projects.projectThree.alt)
    $('#project3 p').text(spanish.projects.projectThree.description)

    $('#project4 h2').text(spanish.projects.projectFour.title)
    $('#project4 img').attr('src', spanish.projects.projectFour.image)
    $('#project4 a').attr('href', spanish.projects.projectFour.url)
    $('#project4 img').attr('alt', spanish.projects.projectFour.alt)
    $('#project4 p').text(spanish.projects.projectFour.description)

    $('#references h2').text(spanish.references.title)
    $("#reference1").text(spanish.references.equator)
    $("#reference2").text(spanish.references.beerworks)

    $('#contact h2').text(spanish.contact.title)
    $('#name').attr('placeholder', spanish.contact.name)
    $('#email').attr('placeholder', spanish.contact.email)
    $('#message').attr('placeholder', spanish.contact.message)
    $('#send').attr('value', spanish.contact.submit)
    $('#contact h2').text(spanish.contact.title)

    $('#social-media h3').text(spanish.contact.footer.h3)

}

$('#spanish').click(function(){
    spanishText();
})
$('#english').click(function(){
    englishText();
})

$('#spanish2').click(function(){
    spanishText();
})
$('#english2').click(function(){
    englishText();
})

$('#show-more').click(function(){
    if($('#show-more').text() === 'Show More'){
        $('#references').height('auto')
        $('#show-more').text('Show Less')
        $('#show-more').css('float', 'left');
        $('#reference1').hide();
        $("#reference2").show();        
        $("#reference3").show();        
    }else{
        $('#references').height('auto')
        $('#show-more').text('Show More')
        $('#show-more').css('float', 'right');
        $('#reference1').show();
        $("#reference1 p").text(english.references.initial);
        $("#reference2").hide();        
        $("#reference3").hide();
    }
})

$('#project1').click(function(){
    $('#project1 div').slideToggle(700)
})
$('#project2').click(function(){
    $('#project2 div').slideToggle(700)
})
$('#project3').click(function(){
    $('#project3 div').slideToggle(700)
});
$('#project4').click(function(){
    $('#project4 div').slideToggle(700)
});

let controller =  new ScrollMagic.Controller();

let scene = new $.ScrollMagic.Scene({
    triggerElement: '#about'
}).setClassToggle('.portrait', 'show').addTo(controller);

let scene2 = new $.ScrollMagic.Scene({
    triggerElement: '#para1',
    offset: 100
}).setClassToggle('.portrait', 'move').addTo(controller);

let scene3 = new $.ScrollMagic.Scene({
    triggerElement: '#para1',
}).setClassToggle('.description', 'to-right').addTo(controller);

let scene4 = new $.ScrollMagic.Scene({
    triggerElement: '#para1',
    offset: 100
}).setClassToggle('.portrait', 'side').addTo(controller);

let scene5 = new $.ScrollMagic.Scene({
    triggerElement: '#para1',
    offset: 100
}).setClassToggle('.description', 'inline').addTo(controller);

let scene6 = new $.ScrollMagic.Scene({
    triggerElement: '#skills',
}).setClassToggle('.hidden', 'fadein').addTo(controller);