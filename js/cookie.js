angular.module('cookieStore', ['ngCookies'])
.controller('CookieController', ['$cookieStore', function($cookieStore) {
  // Put cookie
  //$cookieStore.put('myFavorite','oatmeal');
this.addData = function(formText, formAuthor){
  $cookieStore.put('cookieQuote','author');
  }
  // Get cookie
  var favoriteCookie = $cookieStore.get('myFavorite');
  // Removing a cookie
  $cookieStore.remove('myFavorite');
}]);