<template>
    <section class="todoapp">
        <header class="header">
            <h1> Todos </h1>
            <v-text-field v-model="newTodo" label="Ajouter une tache" class="new-todo" @keyup.enter="addTodo()"></v-text-field>
                        <v-btn class="todo-count" color="info blue">Tâches à faire : <strong> {{ remaining }} </strong></v-btn>
            <ul class="filters">
                 <v-btn href="#" :class="{selected: filter==='all'}" @click.prevent="filter='all'" color="info pink"> Toutes </v-btn>
                <v-btn href="#" :class="{selected: filter==='todo'}" @click.prevent="filter='todo'" color="info orange"> à faire </v-btn>
                <v-btn href="#" :class="{selected: filter==='done'}" @click.prevent="filter='done'" color="info green"> faites </v-btn>
            </ul>            
            <v-checkbox v-model="allDone" class="toggle" label="Tous"></v-checkbox>
        </header>
        <div class="main">            
            <ul class="todo-list">
                <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">
                    <div class="view">
                        <input type="checkbox" v-model="todo.completed" class="toggle"> 
                        <label @dblclick="editTodo(todo)">
                            {{ todo.name }}   
                            <i class="fas fa-trash sizeTrash" @click.prevent="deleteTodo(todo)"></i>
                        </label>
                        
                    </div><input type="text" class="edit" v-model="todo.name" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">
                </li>
            </ul>
        </div>   
        <footer class="footer" v-show="hasTodos">
            <v-btn class="clear-completed" v-show="completed" @click.prevent="deleteCompleted" color="info red"> Supprimer les taches terminées </v-btn>            
        </footer> 
</section>
</template>

<script>
import Vue from 'vue'
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
            editing: null,
            oldTodo: ""
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
        editTodo(todo){
            // on lui indique quel todo modifier
            this.editing = todo
            this.oldTodo = todo.name
        },
        doneEdit(){
            this.editing = null
        },
        cancelEdit(){
            this.editing = this.oldTodo
            this.editing = null
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
    directives:{
        focus(el, value){
            if (value){
                Vue.nextTick(()=> {
                el.focus()
                })
            }
        }
    }
}
</script>

<style src="./todo.css"></style>
<style src="./vuetify.css"></style>
