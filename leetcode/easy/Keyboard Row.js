/**
Given a List of words, return the words that can be typed using letters of 
alphabet on only one row's of American keyboard like the image below. 
Example 1:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    var string=new Array();
    var s1='qwertyuiopQWERTYUIOP';
    var s2='asdfghjklASDFGHJKL';
    var s3='zxcvbnmZXCVBNM';
    for(var i=0;i<words.length;i++){
        for(var j=0;i<words.length&&j<words[i].length;){
            if(s1.indexOf(words[i][0])>=0){
               
                if(s1.indexOf(words[i][j])>=0){ 
                    j++;
                    if(j==words[i].length){
                        string.push(words[i]);
                    }
                }else{
                    
                    j=0;
                    break;
                    
                }
            }else if(s2.indexOf(words[i][0])>=0){
               
                if(s2.indexOf(words[i][j])>=0){ 
                    j++;
                    if(j==words[i].length){
                        string.push(words[i]);
                    }
                }else{
                   j=0;
                    break;
                }
            }else {
               
                if(s3.indexOf(words[i][j])>=0){ 
                    j++;
                    if(j==words[i].length){
                        string.push(words[i]);
                    }
                }else{
                   j=0;
                    break;
                }
            }
        }
        
    }
    return string;
};
var words=["Hello","Alaska","Dad","Peace"];
alert(findWords(words)) ;