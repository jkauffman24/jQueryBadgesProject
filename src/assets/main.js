$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/jkauffman024.json',
  dataType: 'jsonp',
  success: function(response){
    // handle response
    console.log('response', response.courses.completed);
    addCourses(response.courses.completed);
  }
});

function addCourses (courses){
  var $badges = $('#badges');
  courses.forEach(function(course){
    $('<div />', {'class':'course'}).appendTo($badges);
})
}
});
