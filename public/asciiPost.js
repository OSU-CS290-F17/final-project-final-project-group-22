(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['asciiPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class  =\"art\" data-photo-link = "
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + ">\n  <div class =\"art-contents\">\n    <div class =\"result-image-container\">\n      <p class = \"asciiBox\" ></p>\n    </div>\n\n    <div class = \"result-info-container\">\n      <a href=\"#\" class=\"result-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a> <br> <span class=\"userIn\">"
    + alias4(((helper = (helper = helpers.userInput || (depth0 != null ? depth0.userInput : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userInput","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <textarea rows=\"4\" cols=\"50\" name=\"comment\" form=\"usrform\">\n    Enter text here...</textarea>\n  </div>\n</div>\n";
},"useData":true});
})();