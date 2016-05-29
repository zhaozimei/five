'use strict';

function double_to_one(collection) {

 var arr=[];
		for(var i=0;i<collection.length; i++){
			for(var j=0; j<collection[i].length; j++){
				arr.push(collection[i][j])
			}
		}
        if(!arr || !arr.length) return arr;
        var newArray = new Array();
        for(var i=0; i<arr.length; i++){
            var oEl = arr[i];
            if( exist(newArray, oEl)){ 
				continue;
			}
            newArray[newArray.length] = oEl;
        }
      console.log(newArray);
     return newArray;
     function exist(_array, _element){
		if(!_array || !_element){
			 return false;
		}
		if(!_array.length){
			return (_array == _element);
		}
		for(var i=0; i<_array.length; i++){
			if(_element == _array[i]){
				 return true;
			}
		}
		return false;
	}

}

module.exports = double_to_one;
