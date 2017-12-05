(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['asciiPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"art-container\">\r\n"
    + alias4(((helper = (helper = helpers["genre-title"] || (depth0 != null ? depth0["genre-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre-title","hash":{},"data":data}) : helper)))
    + "\r\n\r\n<div class  =\"art\" >\r\n  <div class =\"art-contents\">\r\n    <div class =\"result-image-container\" data-photo-link = "
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + ">\r\n      <p class = \"asciiBox\" ></p>\r\n    </div>\r\n\r\n    <div class = \"result-info-container\">\r\n      <a href=\"#\" class=\"result-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a> <br> <span class=\"userIn\">"
    + alias4(((helper = (helper = helpers.userInput || (depth0 != null ? depth0.userInput : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userInput","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();