function start() {
    
if( document.querySelectorAll('.numbering')[0].innerHTML.slice(6,8) === '1&') {
    var k = 200
    $( "head" ).append( "<script src=\"https://shiningrockforyou.github.io/annotator-full.min.js\" type=\"text/javascript\"><\/script>" );
    $( "head" ).append( "<link rel=\"stylesheet\" href=\"https://shiningrockforyou.github.io/annotator.min.css\" \/>" );
    $( "head" ).append( "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto+Serif\" \/>" );
    $( "head" ).append( "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\" \/>" );
    let annotatorScript = document.createElement("script");
    annotatorScript.setAttribute("src","https://shiningrockforyou.github.io/annotator-full.min.js");
    annotatorScript.setAttribute("type","text/javascript");
    document.head.appendChild(annotatorScript);
    // console.log("load script");
    };
    
    
    
    $("#currentPage>div:first>div:first").css("display", "inline-block");
    $("#currentPage>div:first>div:first").css("width", "100%");
    $("#currentPage>div:first>div:first>div:first>.surveyEditorQuestion").css("border-bottom", "none");
    $("#currentPage>div:first>div:first>div:first").wrapAll( "<div class='pageText' />");
    $("#currentPage>div:first>div:first>div:first").nextAll().wrapAll( "<div class='pageQuestions' />");
    
    document.getElementsByClassName("surveyNameBackground")[0].children[1].setAttribute('id',"headerContainer");
    document.getElementsByClassName("scNavigation")[0].setAttribute('id',"navigationBarBottom");
    
        if (document.querySelectorAll('input[checked]')[0] !== undefined){
       
        const checkRadio = document.querySelectorAll('input[checked]')[0].parentElement
        checkRadio.classList.add("checkedlabel");
        // console.log(checkRadio)
    }
        else {};
    
    var radioChoiceA = document.getElementsByClassName('radio')[0]
    var radioChoiceB = document.getElementsByClassName('radio')[1]
    var radioChoiceC = document.getElementsByClassName('radio')[2]
    var radioChoiceD = document.getElementsByClassName('radio')[3]
    
    // console.log(radioChoiceA,"this is Choice A")
    // console.log(radioChoiceB,"this is Choice B")
    // console.log(radioChoiceC,"this is Choice C")
    // console.log(radioChoiceD,"this is Choice D")
    
    var answer_choices = new Array(radioChoiceA,radioChoiceB,radioChoiceC,radioChoiceD)
    
    // console.log(answer_choices)
    
    var answer_list = new Array(55)
    
    var answer01 = answer_list[0]
    
    answer_list[0] = "hi"
    
    // console.log(answer_list[0])
    
    var questionNumberText 
    questionNumberText = document.getElementsByClassName('numbering')[0].innerHTML.replace(/\s+/g, '');
    // console.log(questionNumberText,'before slicing question number')
    
    var questionNumber 
    questionNumber = questionNumberText.slice(6,-6);
    // console.log(questionNumber);
    
    if (sessionStorage.answerListStorage === undefined) {
        // console.log("storage is empty")
    } else {
        // console.log("not empty")
        answer_list = JSON.parse(sessionStorage.answerListStorage);
    };
    
    /* const answeredQuestionList = new Array(27);
    console.log(answeredQuestionList,'answered Q list');
    
    answeredQuestionList.forEach(checkAnsweredQuestions)
    
    
    } */
    
    
    $(document).on("change","input", function(){
        $("label").removeClass("checkedlabel");
        if($(this).is(":checked")) $(this).closest("label").addClass("checkedlabel");
        const gonnaCheckRadio = this.closest(".radio");
        // console.log(gonnaCheckRadio);
        /*
        let n = questionNumber;
        var navigationPageButton = document.querySelector(".pagination>li:nth-child("+n+")").children[0];
        navigationPageButton.classList.add("answeredQuestion");
        console.log('just added asnweredQ to ',navigationPageButton)
        answeredQuestionList[n-1] = n;
        console.log(answeredQuestionList,'saved answered question in array');
        console.log('marked answered question'); */
       
        if(gonnaCheckRadio === radioChoiceA) {console.log("you chose A"); answer_list[questionNumber] = "A"; console.log(answer_list[questionNumber]);
        // console.log(answer_list);
           }
         if(gonnaCheckRadio === radioChoiceB) {console.log("you chose B"); answer_list[questionNumber] = "B"; console.log(answer_list[questionNumber]);
        //  console.log(answer_list);
        }
         if(gonnaCheckRadio === radioChoiceC) {console.log("you chose C"); answer_list[questionNumber] = "C"; console.log(answer_list[questionNumber]);
        //  console.log(answer_list);
        }
         if(gonnaCheckRadio === radioChoiceD) {console.log("you chose D"); answer_list[questionNumber] = "D"; console.log(answer_list[questionNumber]);
        //  console.log(answer_list);
        }
           
        sessionStorage.setItem("answerListStorage",JSON.stringify(answer_list));
        // console.log("working?");
    
    });
    
    // console.log(document.querySelectorAll('a.answeredQuestion'),'this is the list of answeredQuestion');
    
    answer_list.forEach(checkAnsweredQuestions);
    
    function checkAnsweredQuestions(q, index){
        if(q !== null && q !== 'hi'){
            // console.log(index,'this is an answered Q');
            let selectedLi = document.querySelector(".pagination").children[index-1].children[0]
            selectedLi.classList.add("answeredQuestion");
            // console.log('added to ',selectedLi);
    
           /*console.log(selectedLi,'this is the list i selected, just added answeredQuestion');*/
        }
    };
    
    
    const bookmarkNav = document.getElementById('scQuestionFlagsBar').children[1];
    // console.log(bookmarkNav,"541");
    bookmarkNav.style.color = "#1e1e1e";
    
    const scContentContainerTempObject = document.querySelectorAll('.scContentContainer')[0];
    $(scContentContainerTempObject).detach().prependTo('.scContentPage');
    
    const headerContainerTempObject = document.querySelectorAll('#headerContainer');
    $(headerContainerTempObject).detach().prependTo('.surveyNameBackground');
    
    const scCountDownTempObject = document.querySelectorAll('.scCountDown')[0];
    $(scCountDownTempObject).detach().prependTo('.surveyNameBackground');
    
    const pageHeaderTempObject = document.querySelectorAll('.page-header')[0];
    $(pageHeaderTempObject).detach().prependTo('.surveyNameBackground');
    
    const nameTempObject = document.querySelectorAll('.surveyNameBackground')[0];
    $(nameTempObject).detach().prependTo('.scContentPage');
    
    const logoNewTempObject = document.querySelectorAll('.surveyLogoBackground')[0];
    $(logoNewTempObject).detach().prependTo('.scContentPage');
    
    // give ID to col-md-5 first.
    var buttonsTempObject = document.querySelectorAll('.col-md-5')[0];
    buttonsTempObject.setAttribute("id","buttonsDiv");
    buttonsTempObject = document.querySelector("#buttonsDiv")
    
    var pagesTempObject = document.querySelectorAll('.col-md-5')[1];
    pagesTempObject.setAttribute("id","progressBarDiv");
    pagesTempObject = document.querySelector("#progressBarDiv")
    
    
    
    
    $(buttonsTempObject).detach().prependTo('#navigationBarBottom');
    $(pagesTempObject).detach().prependTo('#navigationBarBottom');
    
    const progressBarTempObject = document.querySelectorAll('.col-md-2')[0];
    $(progressBarTempObject).detach().prependTo('#navigationBarBottom');
    
    buttonsTempObject.style.justifyContent = "right"
    pagesTempObject.style.justifyContent = "center"
    pagesTempObject.style.width = "30%";
    progressBarTempObject.style.width ="35%";
    
    const checkingNextPage = document.getElementById('nextPage');
    const checkingPreviousPage = document.getElementById('previousPage');
    
    if (checkingNextPage !== null) {{
    
    const pageQd = document.querySelectorAll('.row,.SurveyEditorQuestion')[1].children[0]
    // console.log(pageQd);
    jQuery(pageQd).detach().prependTo(".numbershade");
    pageQd.style.textAlign = "left";
    
    }
    
    const newbookmarkHeight = document.querySelectorAll('.row,.SurveyEditorQuestion')[1]
    const bookmarkHeight  = document.querySelectorAll('.row,.SurveyEditorQuestion')[0].children[0].children[0]
    // console.log(bookmarkHeight);
    bookmarkHeight.style.color = "#FFFFFF";
    jQuery(bookmarkHeight).clone().prependTo(newbookmarkHeight)
    
    const pageQdd = document.getElementById("numberspace").children[0].children[0];
    // console.log(pageQdd,"1");
    pageQdd.style.textAlign = "left";
    
    const invisibleMark = document.querySelectorAll('.row,.SurveyEditorQuestion')[0].children[0]
    // console.log(invisibleMark,"44")
    invisibleMark.style.visibility = "hidden";
    
    } else {
    if (checkingPreviousPage !== null) {
    const pageQd = document.querySelectorAll('.row,.SurveyEditorQuestion')[1].children[0]
    // console.log(pageQd);
    jQuery(pageQd).detach().prependTo(".numbershade");
    pageQd.style.textAlign = "left";
    
    const newbookmarkHeight = document.querySelectorAll('.row,.SurveyEditorQuestion')[1]
    const bookmarkHeight  = document.querySelectorAll('.row,.SurveyEditorQuestion')[0].children[0].children[0]
    // console.log(bookmarkHeight);
    bookmarkHeight.style.color = "#FFFFFF";
    jQuery(bookmarkHeight).clone().prependTo(newbookmarkHeight)
    
    const pageQdd = document.getElementById("numberspace").children[0].children[0];
    // console.log(pageQdd,"1");
    pageQdd.style.textAlign = "left";
    
    const invisibleMark = document.querySelectorAll('.row,.SurveyEditorQuestion')[0].children[0]
    // console.log(invisibleMark,"44")
    invisibleMark.style.visibility = "hidden";
    }};
    
    const questionBoxForResizing = document.querySelectorAll('.row,.SurveyEditorQuestion')[1]
    questionBoxForResizing.setAttribute('id',"questionBoxForResizing");
    
    const dropDownToggleText = document.querySelectorAll('.btn, .dropdown-toggle')[0];
    dropDownToggleText.innerHTML = " Question " + questionNumber + " of 27";
    
    const progressWindowParent = document.querySelectorAll('.btn-group, .dropup')[0].children[1];
    // console.log(progressWindowParent);
    $("<div>Section 1: Reading and Writing Questions</div><div><div id='currentQuestionPic'><img src='https://shiningrockforyou.github.io/gpsmark.png' style='width: 1.8em; height: 1.8em'></div><div id='currentQuestionText'>Current</div><div id='unansweredQuestionPic'><div id='unansweredQuestionSquare'></div></div><div id='unasweredQuestionText'>Unanswered</div><div id='forReviewQuestionPic'><img src='https://shiningrockforyou.github.io/bookmark-on.png' style='width: 1.8em; height: 1.8em'></div><div id='forReviewQuestionText'>For Review</div></div>").prependTo(progressWindowParent);
    // console.log(progressWindowParent.children[0])
    progressWindowParent.children[0].setAttribute("id","progressMenuWindow");
    progressWindowParent.children[1].setAttribute("id","progressMenuFlex");
    
    const questionsFlagged = document.getElementsByClassName('questionsWithFlagsScroll')[0];
    // console.log(questionsFlagged);
    
    const questionsDropDownButton = document.querySelectorAll('.btn-group, .dropup')[0]
    // console.log(questionsDropDownButton);
    
    /* const bookmarkButtonElement = document.querySelectorAll('#scQuestionFlagsBar')[0].children[1];
    console.log(bookmarkButtonElement); 
    
    //no longer using bookmark button, gonna hide it
    */
    $(questionsDropDownButton).detach().prependTo(document.querySelector("#progressBarDiv"));
    
    var currentSessionID = document.getElementById('currentSCId').innerHTML;
    // console.log(currentSessionID,'this is the current session id');
    
    questionsDropDownButton.setAttribute("onmouseover","showQuestionFlags(currentSessionID, 'FLAGS'); checkBookmarkIdsNoDelay(); pageQuestionIdArray.forEach(checkForBookmarkedQuestions);");
    
    var currentBookmarkOnClickValue = document.querySelectorAll('.numbershade');
    
    var currentQuestionIdNumber = $("[id^='question_']")[1].outerHTML.slice(18,54);
    var currentQuestionBookmarkButton = $("[id*='flag_"+currentQuestionIdNumber+"']");
    var currentQBBOnClick = currentQuestionBookmarkButton.attr('onclick');
    currentQuestionBookmarkButton.attr('onmousedown',currentQBBOnClick);
    currentQuestionBookmarkButton.attr('onclick',"");
    currentQuestionBookmarkButton.attr('onmouseup',"showQuestionFlags(currentSessionID, 'FLAGS'); checkBookmarkIdsNoDelay(); pageQuestionIdArray.forEach(checkForBookmarkedQuestions);");
    
    
    
    
    //document.getElementById('navigationBarBottom').innerHTML = headerFooterDifference;
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    
    }
    
    var bookmarkExistTest;
    
    
    
    
    
    
    
    /* var tempFileQuestionNumber2 = document.getElementsByClassName('questionsWithFlagsScroll')[0];
    if(typeof tempFileQuestionNumber2 !== undefined){
        var questionNumberButton = document.getElementsByClassName('pagination')[0].children[0].children[0];
        questionNumberButton.classList.add("bookmarkedQuestion");
        console.log('this is it')
    } */
    
    
    //set question number variables
    
    
    
    
    
    var pageQuestionIdArray;
    var page001;
    var page002;
    var page003;
    var page004;
    var page005;
    var page006;
    var page007;
    var page008;
    var page009;
    var page010;
    var page011;
    var page012;
    var page013;
    var page014;
    var page015;
    var page016;
    var page017;
    var page018;
    var page019;
    var page020;
    var page021;
    var page022;
    var page023;
    var page024;
    var page025;
    var page026;
    var page027;
    
    
    getNumberOneQuestionId();
    
    $(function(){
        $('div[onload]').trigger('onload');
    });
    
    //pageQuestionIdArray.forEach(checkForBookmarkedQuestions);
    
    
    /* function pleaseWork() {
    
    $(questionsDropDownButton).mousedown(function(){
        console.log(this.pageQuestionIdArray)
        console.log(this.page004,'dropdown function starting');
        if(this.pageQuestionIdArray !== undefined){
        checkBookmarkIds();
        this.pageQuestionIdArray.forEach(checkForBookmarkedQuestions);
        console.log(questionsDropDownButton,'function condition met and it ran');
        } else { return 'there is no array'};
    });
    
    };
     */
    
    
    
    
    
    // $("[class='questionsWithFlagsScroll'][onclick*='96ed1c60-d83b-48d4-a000-e4472cf0e283']")
    
    
    
    
    var checkReviewAnswersButton = document.getElementById('reviewAnswersButton')
    // console.log(checkReviewAnswersButton,"does review exist?");
    //end of question pages code
}