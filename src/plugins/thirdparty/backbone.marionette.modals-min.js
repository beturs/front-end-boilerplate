(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};!function(a){return"function"==typeof define&&define.amd?define(["underscore","backbone","backbone.marionette","exports"],a):"object"==typeof exports?a(require("underscore"),require("backbone"),require("backbone.marionette"),exports):a(_,Backbone,Backbone.Marionette,{})}(function(b,d,e,f){return f=function(f){function g(){return this.destroy=a(this.destroy,this),g.__super__.constructor.apply(this,arguments)}return c(g,f),g.prototype.modals=[],g.prototype.zIndex=0,g.prototype.show=function(a,c){var f,g,h,i,j,k,l,m,n;for(null==c&&(c={}),this._ensureElement(),d.$("body").css({overflow:"hidden"}),this.modals.length>0&&(f=b.last(this.modals),f.modalEl.addClass(""+f.prefix+"-view--stacked"),h=this.modals[this.modals.length-1],null!=h&&h.modalEl.removeClass(""+h.prefix+"-modal--stacked-reverse")),a.render(c),a.regionEnabled=!0,this.triggerMethod("before:swap",a),this.triggerMethod("before:show",a),e.triggerMethodOn(a,"before:show"),this.triggerMethod("swapOut",this.currentView),this.$el.append(a.el),this.currentView=a,this.triggerMethod("swap",a),this.triggerMethod("show",a),e.triggerMethodOn(a,"show"),m=this.modals,i=0,k=m.length;k>i;i++)g=m[i],g.undelegateModalEvents();for(n=this.modals,j=0,l=n.length;l>j;j++)g=n[j],g.$el.css({background:"none"});return a.on("modal:destroy",this.destroy),this.modals.push(a),this.zIndex++},g.prototype.destroy=function(){var a,c;return(c=this.currentView)?(c.destroy&&!c.isDestroyed?c.destroy():c.remove&&c.remove(),c.off("modal:destroy",this.destroy),this.modals.splice(b.indexOf(this.modals,c),1),this.zIndex--,this.currentView=this.modals[this.zIndex-1],a=b.last(this.modals),a&&(a.$el.removeAttr("style"),a.modalEl.addClass(""+a.prefix+"-modal--stacked-reverse"),b.delay(function(){return function(){return a.modalEl.removeClass(""+a.prefix+"-modal--stacked")}}(this),300),0!==this.zIndex&&a.delegateModalEvents()),0===this.zIndex&&d.$("body").css({overflow:"visible"}),this.triggerMethod("modal:destroy",c)):void 0},g.prototype.destroyAll=function(){var a,b,c,d,e;for(d=this.modals,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.destroy());return e},g}(e.Region),e.Modals=f,e.Modals})}).call(this);