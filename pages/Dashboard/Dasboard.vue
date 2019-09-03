<template>
    <div class="page">
        <h2>Dashboard Page</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
    name: 'DashboardPage',
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
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>