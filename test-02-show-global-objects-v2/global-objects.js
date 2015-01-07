(function () {

    var GlobalObjectClass = function () {
        this.objektyPred = [];
        this.objektyPo = [];
        this.objektyDiff = [];
    };

    GlobalObjectClass.prototype.zjistiObjekty = function (pole) {
        for (var i in window) {
            pole.push(i);
        }
    };

    GlobalObjectClass.prototype.porovnejObjekty = function () {
        var rozdily = function (a1, a2) {
            var a = [], diff = [];
            for (var i = 0; i < a1.length; i++)
                a[a1[i]] = true;
            for (var i = 0; i < a2.length; i++)
                if (a[a2[i]]) delete a[a2[i]];
                else a[a2[i]] = true;
            for (var k in a)
                diff.push(k);
            return diff;
        };
        this.objektyDiff = rozdily(this.objektyPred, this.objektyPo);
    };

    GlobalObjectClass.prototype.vypisObjekty = function (obj) {
        for (var i in obj) {
            document.getElementById("alerts").innerHTML += ("<li>" + obj[i] + "</li>");
        }
    };

    GlobalObjectClass.prototype.base = function () {
        this.zjistiObjekty(this.objektyPred);
    };

    GlobalObjectClass.prototype.showDiffs = function () {
        this.zjistiObjekty(this.objektyPo);
        this.porovnejObjekty();
        this.vypisObjekty(this.objektyDiff);
    };

    //var globalObject1 = new GlobalObjectClass();
    window.globalObject = new GlobalObjectClass();

})();

