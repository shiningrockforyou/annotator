function results() {
        //Results passage code
        $('.surveyLogoBackground').detach().prependTo('.scContentPage');
        document.getElementsByClassName('page-header')[0].setAttribute("style","width: 100% !important;")
        document.getElementsByClassName('rtAllResultsReviewAnswers')[0].innerHTML = "Module 1 Review (PDF)"
        document.getElementsByClassName('rtAllResultsReviewAnswers')[1].innerHTML = "Module 2 Review (PDF)"
        document.getElementsByClassName('surveyNameBackground')[0].setAttribute("style","justify-content: flex-start; background-color: white;")
        document.getElementsByClassName('surveyNameBackground')[0].children[0].setAttribute("style","margin: 0px !important;")
        if(document.getElementById("reviewAnswersButton") !== null) {
           
            document.getElementById("reviewAnswersButton").setAttribute("style","margin: 10vw !important; width: 300px;");
        } else {}
        
      var individualResp = document.getElementById('individualResponses')
      var reviewButton01 = document.getElementsByClassName('rtAllResultsReviewAnswers')[0]
      var reviewButton02 = document.getElementsByClassName('rtAllResultsReviewAnswers')[1]
      var reviewClick01 = reviewButton01.getAttribute('onclick')
      var reviewClick02 = reviewButton02.getAttribute('onclick')
    
      
      reviewButton01.setAttribute('onclick', reviewClick01 + ' clickWait();')
      reviewButton02.setAttribute('onclick', reviewClick02 + ' clickWait();')
    
}