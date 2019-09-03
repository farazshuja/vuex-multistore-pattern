<template>
    <div class="page">
        <h2>Home Page</h2>
        <ul>
            <li>
                Split the vuex multiple stores
                <ul>
                    <li><b>App level</b>: Put the content into app/global level for information which is required for all component, e.g. app version, user session etc.</li>
                    <li><b>Page level</b>: Put the content related to page and sub-contents via creating a new store</li>
                </ul>
                <div class="row">
                    <div class="column">
                        <h4>Pros</h4>
                        <ul>
                            <li>No need to register/un-register page and component stores.</li>
                            <li>Register/Unregister nested pages easily inside created/destroyed hook</li>
                            <li>Un-real watcher are not fired</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4>Cons</h4>
                        <ul>
                            <li>App level store is accessible only via $root syntax or appStore syntax</li>
                            <li>Devtools not supported for multiple stores</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
        <hr />
        <div class="container">
            <div class="row">
                <div class="column">
                    <shared-component />
                </div>
                <div class="column">
                    <shared-component-with-preserved-state />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from './store';
import SharedComponent from '../../components/sharedComponent/sharedComponent'
import SharedComponentWithPreservedState from '../../components/sharedComponentWithPresevedState/sharedComponentWithPresevedState';

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'HomePage',
    store,
    components: {
        SharedComponent,
        SharedComponentWithPreservedState,
    },
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    methods: {
        ...mapActions(['incrementCount']),
    },
}
</script>