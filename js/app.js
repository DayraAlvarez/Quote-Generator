console.log(data);

var iceBreaker =Object.keys(data);
console.log(iceBreaker);

document.getElementById("button").addEventListener("click", function(){
    swal("The woods are lovely, dark and deep; but i have promises to keep and miles to go before i sleep");
});

/* Funcion para escoger random
var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

You can just build an array of keys while walking through the object.

var keys = [];
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        keys.push(prop);
    }
}
Then, randomly pick an element from the keys:

return keys[keys.length * Math.random() << 0];                          
*/