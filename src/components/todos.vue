<template>
    <section class="todoapp">
        <header class="header">
            <h1> Todos </h1>
               <v-btn color="success">Success</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="info">Info</v-btn>
            <v-text-field v-model="newTodo" label="Ajouter une tache" class="new-todo" @keyup.enter="addTodo()"></v-text-field>
            <v-checkbox v-model="allDone" class="toggle" label="Tous"></v-checkbox>
        </header>
        <div class="main">            
            <ul class="todo-list">
                <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed}">
                    <div class="view">
                        <input type="checkbox" v-model="todo.completed" class="toggle"> 
                        <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
                        <!-- <v-checkbox v-model="todo.completed" class="toggle"></v-checkbox> -->
                    </div>
                </li>
            </ul>
        </div>    
</section>
</template>

<script>
export default {
    data() {
        return{
            // on retourne un tableau des taches
            todos: [{
                name: 'Tache de test',
                completed: false
            }],
            newTodo: '' ,
            filter: 'all',
            // on crée editing pour sauvegarder la tache modifiée
            editing: null
        }
    },
    methods: {
        addTodo(){
            // on push dans le tableau existant
            this.todos.push({
                completed:false, 
                name : this.newTodo
            }) 
            // on n'oublie pas de vider newTodo
            this.newTodo = ""
        },
        deleteTodo(todo){
            // on change la valeur de todo avec un system de filtre
            // je veux tous les éléments différents de la todo passée en paramètres 
            this.todos = this.todos.filter(i=> i !== todo)
        },
        deleteCompleted(){
            // on filtre en récuperant celles qui ne sont pas complétées
            this.todos = this.todos.filter(todo => !todo.completed)
        },
        editTodo(){
            // on lui indique quel todo modifier
            this.editing = todo
        }
    },
    computed: {
        allDone: {
            get(){
                return this.remaining === 0
            },
            set(value){
                console.log(value);
                this.todos.forEach(todo => {
                    todo.completed = value
                })
            }
        },
        remaining(){
            /* on prend la liste des todo et on filtre
            on lui demande de retourner uniquement celle non complétées */
            return this.todos.filter(todo => !todo.completed).length
        },
        completed(){
            /* return toutes celles qui sont complétées et donne sa taille */
            return this.todos.filter(todo => todo.completed).length
        },
        // on supp le footer si la liste des todos est vide
        hasTodos(){
            return this.todos.length > 0
        },
        filteredTodos(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => !todo.completed)
            } else if (this.filter === 'done'){
                return this.todos.filter(todo => todo.completed)
            }
            return this.todos
        }
    },
}
</script>

<style src="./todo.css"></style>