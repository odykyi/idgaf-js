# IDGAF-js

*Pay attenton to curly braces*

I don't give a fuc* what is it

 > it's just a best architecture in node.js (sarcasm)

https://github.com/odykyi/idgaf-js/blob/master/fuck1.js

Just clone and run

    $ npm start

# Result

    IDGAF works!
    fuck2 context {}
    fuck2 called once
    fuck2 inner function called once
    fuck3 context {}


# Source code


## index.js

    require('./fuck1');
    require('./fuck2');
    require('./fuck3');

## fuck1.js

    }, function fuck1() {
        console.log('IDGAF works!')

## fuck2.js

    }, function fuck2() {
        console.log('fuck2 context', this); // {}
        console.log('fuck2 called once');
        (() => {
            console.log('fuck2 inner function called once');
        })();

## fuck3.js

    }, function () {
        console.log('fuck3 context', this); // {}

