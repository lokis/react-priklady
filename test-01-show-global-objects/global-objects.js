//var globalObject = {};

var objektyPred = [];
var objektyPo = [];
var objektyDiff = [];

var zjistiObjekty = function(pole){
    for (var i in window) {
        pole.push(i);
    }
};

var porovnejObjekty = function(){
    var rozdily = function(a1, a2)
    {
        var a=[], diff=[];
        for(var i=0;i<a1.length;i++)
            a[a1[i]]=true;
        for(var i=0;i<a2.length;i++)
            if(a[a2[i]]) delete a[a2[i]];
            else a[a2[i]]=true;
        for(var k in a)
            diff.push(k);
        return diff;
    };
    objektyDiff = rozdily(objektyPred, objektyPo);
};

var vypisObjekty = function(obj) {
    for (var i in obj) {
        document.getElementById("alerts").innerHTML += ("<li>" + obj[i] + "</li>");
    }
};

var base = function() {
    zjistiObjekty(objektyPred);
};

var showDiffs = function() {
    zjistiObjekty(objektyPo);
    porovnejObjekty();
    vypisObjekty(objektyDiff);
};
