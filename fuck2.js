}, function fuck2() {
    console.log('fuck2 context', this); // {}
    console.log('fuck2 called once');
    (() => {
        console.log('fuck2 inner function called once');
    })();
