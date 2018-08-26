var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        fruits: ['apple', 'banana', 'strawberry'],
        formParam: 'ふぉーむぱらむ',
        isShow: true,
        count: 1
    },
    methods: {
        handleClick: function(event) {
            alert(event.target);
            this.count++;
        }
    }
})
