<template>
    <section class="todoapp">
        <header class="header">
            <h1>
                Todos
            </h1>
            <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="addTodo()">
            <input class="toggle" type="checkbox" v-model="allDone">
        </header>
        <div class="main">
            <ul class="todo-list">
                <!-- :class : ajoute moi la classe completed si todo.completed est à true -->
                <li class="todo editing" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">
                    <div class="view">
                        <!-- on checkbox pour vérifier si c'est complété -->
                        <input type="checkbox" v-model="todo.completed" class="toggle"> 
                        <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
                        <button @click.prevent="deleteTodo(todo)">(x)</button>
                         
                    </div>
                    <input type="text" class="edit" v-model="todo.name">
                </li>
            </ul>
        </div>    
        <!-- on affiche le footer uniquement si il y a des elements : v-show="todos.length > 0" ou là on passe la propriété computed -->
        <footer class="footer" v-show="hasTodos">
            <span class="todo-count"><strong> {{ remaining }} </strong> Taches à faire </span>
            <ul class="filters">
                <li><a href="#" :class="{selected: filter==='all'}" @click.prevent="filter='all'">Toutes</a></li>
                <li><a href="#" :class="{selected: filter==='todo'}" @click.prevent="filter='todo'">A faire</a></li>
                <li><a href="#" :class="{selected: filter==='done'}" @click.prevent="filter='done'">Faites</a></li>
            </ul>
            <button class="clear-completed" style="display=block" v-show="completed" @click.prevent="deleteCompleted">Supprimer taches terminées</button>
        </footer>
    </section>
</template>




