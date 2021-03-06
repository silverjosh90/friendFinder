var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes')

var ProfileAnswersActions = {
  addAnswers: function(answers) {
    console.log('getting to profile answers');
$.ajax({
  type: "POST",
  url: 'http://localhost:3000/profileanswers/answers',
  data: answers,
  dataType: 'json',
  cache: false,
  error: function (xhr, ajaxOptions, thrownError) {
          console.log(xhr);
          console.log(thrownError)

  },
  success: function(data){

    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_PROFILE_QUESTION_ANSWER,
      user: data
    })
  }
})

}
}

module.exports = ProfileAnswersActions
