(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['asciiPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class  =\"art\" >\n  <div class =\"art-contents\">\n    <div class = \"result-info-container\">\n      <a href=\"#\" class=\"result-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a> <br> <span class=\"userIn\">"
    + alias4(((helper = (helper = helpers.userInput || (depth0 != null ? depth0.userInput : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userInput","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <div class =\"result-image-container\" data-photo-link = "
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + ">\n      <p class = \"asciiBox\" ></p>\n    </div>\n\n  </div>\n</div>\n";
},"useData":true});
})();