module.exports = { 
 //param A : string
 //return an integer
    braces : function(A){
        
        var result = 0;
        var array = A.split("");
        var braces = array.filter(b=>b==="(").length;
        for(var i=0;i<braces;i++)
        {
            if(result===0)
            {
                var openingIndex = array.lastIndexOf("(");
                var closingIndex = array.indexOf(")",openingIndex);
                if(closingIndex===openingIndex+1||closingIndex===openingIndex+2)
                {
                    result = 1;
                }
                array.splice(openingIndex,closingIndex-openingIndex+1);
            }
        }
        
        return result;
        

    }
};