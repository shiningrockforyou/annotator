if( document.querySelectorAll('.numbering')[0] !== undefined){

    start()

} else {

results()

};

startAnnotationModule();



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkForBookmarkedQuestions(x) {
    if ($("[class='questionsWithFlagsScroll'][onclick*='"+x+"']").length ==! 0) {
   
 
     let n = pageQuestionIdArray.indexOf(x) + 1;
 
     document.querySelector(".pagination>li:nth-child("+n+")").children[0].classList.add("bookmarkedQuestion");
     return document.querySelector(".pagination>li:nth-child("+n+")").children[0];   
 
     
 } else {return null}
 }

var bookmarkExistTest;

document.querySelectorAll('.row.surveyEditorQuestion')[0].style.height = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
- document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
- (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
- document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-20+'px'

const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
            
        document.querySelectorAll('.form-horizontal')[0].style.height = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-25+'px'

        document.querySelectorAll('.form-horizontal')[0].style.maxHeight = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-25+'px !important'

      document.querySelectorAll('.row.surveyEditorQuestion')[0].style.height = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-(35+(window.innerHeight/100)*5)+'px'

        document.querySelectorAll('.row.surveyEditorQuestion')[0].style.maxHeight = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-(35+(window.innerHeight/100)*5)+'px !important'

      document.querySelectorAll('.row.surveyEditorQuestion')[1].style.height = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-(35+(window.innerHeight/100)*5)+'px'

        document.querySelectorAll('.row.surveyEditorQuestion')[1].style.maxHeight = document.querySelectorAll('body')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.surveyNameBackground')[0].getBoundingClientRect().bottom 
      - (document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().bottom 
      - document.querySelectorAll('.scNavigation')[0].getBoundingClientRect().top)-(35+(window.innerHeight/100)*5)+'px !important'

      
      
    })
  })
  
  observer.observe(document.getElementsByTagName('body')[0]);
    var passageCheck = []
  var passageCheckInt = []

nextButtonOnClick = $('#nextPage').attr('onclick');
previousButtonOnClick = $('#previousPage').attr('onclick');
$('#nextPage').attr('onclick', nextButtonOnClick + '; saveAnnotation()');
$('#previousPage').attr('onclick', previousButtonOnClick + '; saveAnnotation()');

var naviArray = document.querySelectorAll('.pagination>li>a')

naviArray.forEach(naviSave)
function naviSave(c, index) {
console.log(index,'iiii')
a = document.querySelectorAll('.pagination>li>a')[index].getAttribute('onclick')
console.log(a,'aaaa')
document.querySelectorAll('.pagination>li>a')[index].setAttribute('onclick',a +'; saveAnnotation()')

}
 
function saveAnnotation() {
    a = document.getElementsByClassName('numbering')[0].innerHTML.replace(/\s+/g, '');
    b = a.slice(6,-6);
    console.log(a, b, 'first page check')
    if (b == 1) {
        
        console.log(questionNumber,'saveAnnotation1');
        $('.form-horizontal>.pageText').addClass('passage1')
        $('.pageText').detach().appendTo('#annotationStorage');
        $('.pageQuestions').remove();
    } else {   
    if (k == 200) {
    questionNumberText = document.getElementsByClassName('numbering')[0].innerHTML.replace(/\s+/g, '');
    questionNumber = questionNumberText.slice(6,-6);
    console.log(questionNumber,'saveAnnotation');
    $('.form-horizontal>.pageText').addClass('passage' + questionNumber)
    $('.pageText').detach().appendTo('#annotationStorage');
    $('.pageQuestions').remove();
    } else {}
}
}



if (sessionStorage.passageCheckStorage === undefined) {
    passageCheck.push('1');
    passageCheckInt = passageCheck.map( function (x) {
        return parseInt(x, 10)
    })
    console.log(passageCheckInt)
    console.log('pushed first')
    sessionStorage.setItem("passageCheckStorage",JSON.stringify(passageCheckInt));


} else {

    passageCheck = JSON.parse(sessionStorage.passageCheckStorage);
    passageCheckInt = passageCheck.map( function (x) {
        return parseInt(x, 10)
    })
    console.log(passageCheckInt)

var a = document.getElementsByClassName('numbering')[0].innerHTML.replace(/\s+/g, '');
ab = a.slice(6,-6);
var passageExists = 0;
var m = 0
var newArr = []
checkPassageWhile(ab,m,passageCheckInt)


function checkPassageWhile (p, m, arr) {
    
    
    var u = 0
    arr = passageCheckInt
    console.log(arr,'arr')
    console.log(p, 'p')
    console.log(arr[m], 'arr[m]')
    console.log(arr.length, 'arr.length')
    
    for (let i = 0;i < arr.length + 1; i++) {
     console.log(arr.length,'arr.length inside for')
     console.log(arr[i],'need to be same as p')
     console.log(i,'i')
        if(p == arr[i]) {

            
            console.log(i,'it is a match')
            i = 100
            m = 100
            console.log(m,'times')
            console.log(i,'it is a match')
        } else {
            console.log(i,'not a match')
            console.log(m,'times')
        }
       console.log(m,'m times')
    }

    if (m == 100) {
        q = $('.passage'+p)
        console.log(q,'this is your saved text')
        q.detach().prependTo($('.form-horizontal'))
        $('.pageText')[1].remove()
        var q
    } else {
        arr.push(p)
        u = 200
            }
    return k = u
}

console.log(k,'check mmmk')



if (passageExists == 0) 
{

} 
else {
}

sessionStorage.setItem("passageCheckStorage",JSON.stringify(passageCheckInt));
console.log(passageCheckInt,'final')
};
passageCheckInt.sort()
