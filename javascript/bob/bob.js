var Bob = function() {

};

Bob.prototype.hey = function(string){
  if (string == string.toUpperCase() && (/[a-zA-Z]/).exec(string)){
    return 'Woah, chill out!';
  } else if (/\?$/.exec(string)) {
    return "Sure.";
  } else if (!(/\w/.exec(string))) {
    return 'Fine. Be that way!';
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;