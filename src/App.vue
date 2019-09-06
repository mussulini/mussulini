<template>

    <div id="app">

        <header class="container mb-5" id="nav">
            <img class="logo" alt="Mussulini Lopez" src="./assets/img/mussulini.lopez.png">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </header>

        <router-view />

        <footer class="container text-muted small">
            &copy; Mussulini Lopez 2019

            <ul class="list-inline">
                <li class="list-inline-item"><a href="" class="font-icon icon-html5"></a></li>
                <li class="list-inline-item"><a href="" class="font-icon icon-sass"></a></li>
                <li class="list-inline-item"><a href="" class="font-icon icon-bootstrap"></a></li>
                <li class="list-inline-item"><a href="" class="font-icon icon-vue"></a></li>
            </ul>
        </footer>

        <vue-particles></vue-particles>

    </div>

</template>
