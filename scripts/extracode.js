
//async code
async function clickWait() {
    $("<div class='loadingImage'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>").prependTo('body')
    await sleep(500);
    MathJax.typeset()

    await sleep(2000);
   
    MathJax.typeset()
   $('.surveyLogoBackground').appendTo('html');
   /*$('.surveyNameBackground').appendTo('html');*/

   $('#individualResponses').appendTo('html');
   
document.getElementById('individualResponses').children[0].children[0].classList.add('set1')
document.getElementById('individualResponses').children[0].children[1].classList.add('set1')
document.getElementById('individualResponses').children[0].children[2].classList.add('set2')
document.getElementById('individualResponses').children[0].children[3].classList.add('set2')
document.getElementById('individualResponses').children[0].children[4].classList.add('set3')
document.getElementById('individualResponses').children[0].children[5].classList.add('set3')
document.getElementById('individualResponses').children[0].children[6].classList.add('set4')
document.getElementById('individualResponses').children[0].children[7].classList.add('set4')
document.getElementById('individualResponses').children[0].children[8].classList.add('set5')
document.getElementById('individualResponses').children[0].children[9].classList.add('set5')
document.getElementById('individualResponses').children[0].children[10].classList.add('set6')
document.getElementById('individualResponses').children[0].children[11].classList.add('set6')
document.getElementById('individualResponses').children[0].children[12].classList.add('set7')
document.getElementById('individualResponses').children[0].children[13].classList.add('set7')
document.getElementById('individualResponses').children[0].children[14].classList.add('set8')
document.getElementById('individualResponses').children[0].children[15].classList.add('set8')
document.getElementById('individualResponses').children[0].children[16].classList.add('set9')
document.getElementById('individualResponses').children[0].children[17].classList.add('set9')
document.getElementById('individualResponses').children[0].children[18].classList.add('set10')
document.getElementById('individualResponses').children[0].children[19].classList.add('set10')
document.getElementById('individualResponses').children[0].children[20].classList.add('set11')
document.getElementById('individualResponses').children[0].children[21].classList.add('set11')
document.getElementById('individualResponses').children[0].children[22].classList.add('set12')
document.getElementById('individualResponses').children[0].children[23].classList.add('set12')
document.getElementById('individualResponses').children[0].children[24].classList.add('set13')
document.getElementById('individualResponses').children[0].children[25].classList.add('set13')
document.getElementById('individualResponses').children[0].children[26].classList.add('set14')
document.getElementById('individualResponses').children[0].children[27].classList.add('set14')
document.getElementById('individualResponses').children[0].children[28].classList.add('set15')
document.getElementById('individualResponses').children[0].children[29].classList.add('set15')
document.getElementById('individualResponses').children[0].children[30].classList.add('set16')
document.getElementById('individualResponses').children[0].children[31].classList.add('set16')
document.getElementById('individualResponses').children[0].children[32].classList.add('set17')
document.getElementById('individualResponses').children[0].children[33].classList.add('set17')
document.getElementById('individualResponses').children[0].children[34].classList.add('set18')
document.getElementById('individualResponses').children[0].children[35].classList.add('set18')
document.getElementById('individualResponses').children[0].children[36].classList.add('set19')
document.getElementById('individualResponses').children[0].children[37].classList.add('set19')
document.getElementById('individualResponses').children[0].children[38].classList.add('set20')
document.getElementById('individualResponses').children[0].children[39].classList.add('set20')
document.getElementById('individualResponses').children[0].children[40].classList.add('set21')
document.getElementById('individualResponses').children[0].children[41].classList.add('set21')
document.getElementById('individualResponses').children[0].children[42].classList.add('set22')
document.getElementById('individualResponses').children[0].children[43].classList.add('set22')
document.getElementById('individualResponses').children[0].children[44].classList.add('set23')
document.getElementById('individualResponses').children[0].children[45].classList.add('set23')
document.getElementById('individualResponses').children[0].children[46].classList.add('set24')
document.getElementById('individualResponses').children[0].children[47].classList.add('set24')
document.getElementById('individualResponses').children[0].children[48].classList.add('set25')
document.getElementById('individualResponses').children[0].children[49].classList.add('set25')
document.getElementById('individualResponses').children[0].children[50].classList.add('set26')
document.getElementById('individualResponses').children[0].children[51].classList.add('set26')
document.getElementById('individualResponses').children[0].children[52].classList.add('set27')
document.getElementById('individualResponses').children[0].children[53].classList.add('set27')

   


$('.set1').wrapAll("<div class='setGroupAll'></div>")
$('.set2').wrapAll("<div class='setGroupAll'></div>")
$('.set3').wrapAll("<div class='setGroupAll'></div>")
$('.set4').wrapAll("<div class='setGroupAll'></div>")
$('.set5').wrapAll("<div class='setGroupAll'></div>")
$('.set6').wrapAll("<div class='setGroupAll'></div>")
$('.set7').wrapAll("<div class='setGroupAll'></div>")
$('.set8').wrapAll("<div class='setGroupAll'></div>")
$('.set9').wrapAll("<div class='setGroupAll'></div>")
$('.set10').wrapAll("<div class='setGroupAll'></div>")
$('.set11').wrapAll("<div class='setGroupAll'></div>")
$('.set12').wrapAll("<div class='setGroupAll'></div>")
$('.set13').wrapAll("<div class='setGroupAll'></div>")
$('.set14').wrapAll("<div class='setGroupAll'></div>")
$('.set15').wrapAll("<div class='setGroupAll'></div>")
$('.set16').wrapAll("<div class='setGroupAll'></div>")
$('.set17').wrapAll("<div class='setGroupAll'></div>")
$('.set18').wrapAll("<div class='setGroupAll'></div>")
$('.set19').wrapAll("<div class='setGroupAll'></div>")
$('.set20').wrapAll("<div class='setGroupAll'></div>")
$('.set21').wrapAll("<div class='setGroupAll'></div>")
$('.set22').wrapAll("<div class='setGroupAll'></div>")
$('.set23').wrapAll("<div class='setGroupAll'></div>")
$('.set24').wrapAll("<div class='setGroupAll'></div>")
$('.set25').wrapAll("<div class='setGroupAll'></div>")
$('.set26').wrapAll("<div class='setGroupAll'></div>")
$('.set27').wrapAll("<div class='setGroupAll'></div>")



   $('body').attr("style","display: none;");
   $('div.modal-content').attr("style","display: none;");

   document.getElementsByClassName('surveyNameBackground')[0].children[0].style.width = '100%';
   print()
   
    document.getElementsByClassName('loadingImage')[0].classList.add('loadingImageHide');
    $('loadingImage').remove();
    $('body').attr("style","");
    $('#individualResponses').remove();

   }

async function checkBookmarkIds() {
    await sleep(500);

    // console.log("hi");
    var tempFileQuestionNumber = document.getElementsByClassName('questionsWithFlagsScroll')[0];
    // console.log(tempFileQuestionNumber);
    bookmarkExistTest = $(tempFileQuestionNumber).attr("onclick");
    // console.log(bookmarkExistTest);
    
    if (typeof bookmarkExistTest !== "undefined") {
    let temporarySessionID = bookmarkExistTest.slice(55,-65);
    // console.log(temporarySessionID);
    bookmarkExistTest = temporarySessionID;

}
}

async function checkBookmarkIdsNoDelay() {
    
    // console.log("hi");
    var tempFileQuestionNumber = document.getElementsByClassName('questionsWithFlagsScroll')[0];
    // console.log(tempFileQuestionNumber);
    bookmarkExistTest = $(tempFileQuestionNumber).attr("onclick");
    
    if (typeof bookmarkExistTest !== "undefined") {
    let temporarySessionID = bookmarkExistTest.slice(55,-65);
    bookmarkExistTest = temporarySessionID;

}
}


async function getNumberOneQuestionId() {
    await sleep(200);
    if( document.querySelectorAll('.numbering')[0].innerHTML.slice(6,8) === '1&') {
    await sleep(500);
    numberOneQuestionId = document.querySelectorAll('#currentPage>div')[0].getAttribute("id").toString().slice(11);
    page001 = numberOneQuestionId;

page002 = document.querySelectorAll('.pagination>li')[1].children[0].getAttribute('onclick').slice(22,58);
page003 = document.querySelectorAll('.pagination>li')[2].children[0].getAttribute('onclick').slice(22,58);
page004 = document.querySelectorAll('.pagination>li')[3].children[0].getAttribute('onclick').slice(22,58);
page005 = document.querySelectorAll('.pagination>li')[4].children[0].getAttribute('onclick').slice(22,58);
page006 = document.querySelectorAll('.pagination>li')[5].children[0].getAttribute('onclick').slice(22,58);
page007 = document.querySelectorAll('.pagination>li')[6].children[0].getAttribute('onclick').slice(22,58);
page008 = document.querySelectorAll('.pagination>li')[7].children[0].getAttribute('onclick').slice(22,58);
page009 = document.querySelectorAll('.pagination>li')[8].children[0].getAttribute('onclick').slice(22,58);
page010 = document.querySelectorAll('.pagination>li')[9].children[0].getAttribute('onclick').slice(22,58);
page011 = document.querySelectorAll('.pagination>li')[10].children[0].getAttribute('onclick').slice(22,58);
page012 = document.querySelectorAll('.pagination>li')[11].children[0].getAttribute('onclick').slice(22,58);
page013 = document.querySelectorAll('.pagination>li')[12].children[0].getAttribute('onclick').slice(22,58);
page014 = document.querySelectorAll('.pagination>li')[13].children[0].getAttribute('onclick').slice(22,58);
page015 = document.querySelectorAll('.pagination>li')[14].children[0].getAttribute('onclick').slice(22,58);
page016 = document.querySelectorAll('.pagination>li')[15].children[0].getAttribute('onclick').slice(22,58);
page017 = document.querySelectorAll('.pagination>li')[16].children[0].getAttribute('onclick').slice(22,58);
page018 = document.querySelectorAll('.pagination>li')[17].children[0].getAttribute('onclick').slice(22,58);
page019 = document.querySelectorAll('.pagination>li')[18].children[0].getAttribute('onclick').slice(22,58);
page020 = document.querySelectorAll('.pagination>li')[19].children[0].getAttribute('onclick').slice(22,58);
page021 = document.querySelectorAll('.pagination>li')[20].children[0].getAttribute('onclick').slice(22,58);
page022 = document.querySelectorAll('.pagination>li')[21].children[0].getAttribute('onclick').slice(22,58);
page023 = document.querySelectorAll('.pagination>li')[22].children[0].getAttribute('onclick').slice(22,58);
page024 = document.querySelectorAll('.pagination>li')[23].children[0].getAttribute('onclick').slice(22,58);
page025 = document.querySelectorAll('.pagination>li')[24].children[0].getAttribute('onclick').slice(22,58);
page026 = document.querySelectorAll('.pagination>li')[25].children[0].getAttribute('onclick').slice(22,58);
page027 = document.querySelectorAll('.pagination>li')[26].children[0].getAttribute('onclick').slice(22,58);
pageQuestionIdArray = [page001, page002, page003, page004, page005, page006, page007, page008, page009, page010, page011, page012, page013, page014, page015, page016, page017, page018, page019, page020, page021, page022, page023, page024, page025, page026, page027];
} else { 

};
};

async function startAnnotationModule() {{
    await sleep(500);
    if ($('.annotator-wrapper').length == 0) {
    $("body").annotator();
    console.log('annotation once')
    $("<div id='annotationStorage'></div>").appendTo('body')
    } else {}
};
}
