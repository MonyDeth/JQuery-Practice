'use strict';

try{
    console.log('Student Name: Moeun Samphorsmonydeth')
    x = 10;
} catch(e){
    console.error(e.message);
}

function demo(){
    try{
        y = 20
    } catch(e){
        console.error(e.message);
    }
}

demo();

try{
    eval('var z= 50; delete z;')
} catch(e){
    console.error(e.message);
}