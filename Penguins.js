/***********************************************************
 * Penguins.js
 * Shortening JS Code
 * JS Library
 * Created by Luis Vallejo-Mohl
 * GNU Affero General Public License v3.0
 * Thanks to: 
 * John Resig for inspiration
***********************************************************/

var PenguinsJS = function(selector, context){
	var s = document.querySelectorAll(selector);
	if(typeof context == 'undefined'){
		var context = null;
	};
	return{
		context: context, 
		set:function(a, v){
			for(var item = 0; item < s.length; item++){
				s[item][a] = v;
			};
			return PenguinsJS(selector);
		},
		addElement:function(tagName, voidity, ID){
			if(voidity == 1){
				for(var item = 0; item < s.length; item++){
					s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\"/>';
					return PenguinsJS('#' + ID);
				};
			}else{
				for(var item = 0; item < s.length; item++){
					s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\">' + '</' + tagName + '>';
					return PenguinsJS('#' + ID);
				};
			};
		},
		reload:function(){
			location.reload();
		},
		onEvent:function(e, f){
			for(var item = 0; item < s.length; item++){
				s[item].addEventListener(e, f);
			};
		},
		toDOMNodeArray:function(){
			var array = [];
			for (var i = 0; i < s.length; i++) { 
				s[i].toPenguinsJSObj = PenguinsJS(selector);
				array.push(s[i]);
			};
			return array;
		},
		onTimeInterval:function(functio, timeInterval, endCondition){
			function functi(){
				if(endCondition){
					window.clearInterval(newInterval);
				}else{
					functio(item);
					item++;
				};
			};
			var item = 0;
			var newInterval = setInterval(functi, timeInterval)
		},
		add:function(a, v){
			for(var item = 0; item < s.length; item++){
				s[item][v] += a;
			};
			return PenguinsJS(selector);
		},
		get:function(a){
			var array = [];
			for(var item = 0; item < s.length; item++){
				array.push(s[item][a]);
			};
			return array;
		},
		style:function(p, v){
			for(var item = 0; item < s.length; item++){
				s[item].style[p] = v;
			};
			return PenguinsJS(selector);
		},
		requestTo: function(URL){
			var self = {};
			self.async = true;
			self.requestURL = URL;
			self.type = selector;
			self.on = function(e, n){
				self.onResponse = n;
				return self;
			};
			self.send = function(i){
				var request = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
				var subject = this;
				function funkytion(){
					if(request.status == 200 && request.readyState == 4){
						self.response = request.response;
						subject.onResponse(self.response);
					};
				};
				request.onreadystatechange = funkytion;
				request.open(subject.type, subject.requestURL, subject.async);
				if(i == undefined){
					request.send();
				}else{
					request.send(i);
				};
			};
			return self;
		},
		find: function(a){
			return PenguinsJS(selector + ' ' + a, selector);
		},
		playAudio: function(obj){
			var audioElement = document.createElement('audio');
			audioElement.autoplay = true;
			if(obj.autoplay == false){
				audioElement.removeAttribute('autoplay');
			};
			audioElement.src = obj.source;
			if(obj.showControls = true){
				audioElement.controls = true;
			};
			audioElement.volume = obj.volume;
			document.body.appendChild(audioElement);
		},
		selector: selector,
	};
};
PenguinsJS.reload = location.reload;
PenguinsJS.version = {
	toString: function(){
		return 'v2.0.2-w';
	},
	subjectName: 'Penguins.js',
	fullName:'Penguins.js v2.0.2-w',
	major: 2, 
	minor: 0, 
	patch: 2,
	pre: 'w'
};

function JSONAt(src, callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200) {
      return callback(null, JSON.parse(xhr.response));      
    }
  };
  
  xhr.onerror = callback;
  xhr.open("GET", src);
  xhr.send();
};

(function(){
        var browser = '';
        var version = '';
        var idString = '';
        var ua = navigator.userAgent;
        var tem = [];
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
        if(/trident/i.test(M[1]))
        {
            tem = /\brv[ :]+(\d+.?\d*)/g.exec(ua) || [];
            browser = 'Internet Explorer';
            version = tem[1];
        }
        else if(/firefox/i.test(M[1]))
        {
            tem = /\brv[ :]+(\d+.?\d*)/g.exec(ua) || [];
            browser = 'Firefox';
            version = tem[1];
        }
        else if(/safari/i.test(M[1]))
        {
            tem = ua.match(/\bVersion\/(\d+.?\d*\s*\w+)/);
            browser = 'Safari';
            version = tem[1];
        }
        //If 'Chrome' is found, it may be another browser. 
        else if(M[1] === 'Chrome')
        {
            var temOpr = ua.match(/\b(OPR)\/(\d+.?\d*.?\d*.?\d*)/);
            var temEdge = ua.match(/\b(Edge)\/(\d+.?\d*)/);
            var temChrome = ua.match(/\b(Chrome)\/(\d+.?\d*.?\d*.?\d*)/);

            //a genuine 'Chrome' reading will result from ONLY temChrome not being null.
            var genuineChrome = temOpr == null && temEdge == null && temChrome != null;

            if(temOpr != null){
                browser = temOpr[1].replace('OPR', 'Opera');
                version = temOpr[2];
            }
            if(temEdge != null){
                browser = temEdge[1];
                version = temEdge[2];
            }
            if(genuineChrome){
                browser = temChrome[1];
                version = temChrome[2];
            }
        }

        window.browser = {
		name: browser,
		version:version,
		fullName: browser + '/' + version
	}
    
})();
var _ = PenguinsJS;
var __ = _;
var _PenguinsJS = PenguinsJS;
try{
	window.metadata = [];
	for(var item = 0; item < $('meta').length; item++){
		metadata.push($('meta')[item]);
	};
	metadata.addTag = function(name, value){
		$('<META>').attr('NAME', name).attr('CONTENT', value).appendTo('head');
	};
	metadata.removeTag = function(name){
		__('meta[name="' + name + '"]').set('outerHTML', '');
	};
}catch(e){};

Object.prototype.addProperty = function(name, value){
	this[name] = value;
} //Define Object.prototype.addProperty, even though it is not explicity part of the PenguinsJS object
