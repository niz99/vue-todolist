var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            todos: []
        },
        methods: {
            removeTodo: function(todoIndex){

                this.todos.splice( todoIndex,1 );

            },
            addTodo: function(){

                let objTodo = {
                    text: this.newTodo,
                    done: false
                }

                if( !this.newTodo == ''){
                    this.todos.push(objTodo);
                    this.newTodo = '';
                }
 
            },
            done: function(element){
                if(element.done == true){
                    element.done = false
                } else {
                    element.done = true
                }
            }
        }
    }
)