<template>
    <div class="page">
        <h2>Item Overview Page</h2>
        <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
        <h4 />
        <shared-component-with-preserved-state />
    </div>
</template>

<script>
import store from './store';
import SharedComponentWithPreservedState from '../../../components/sharedComponentWithPresevedState/sharedComponentWithPresevedState';

import { createNamespacedHelpers } from 'vuex'

const PAGE_COMPONENT = 'pageItemOverView';
const { mapActions, mapGetters } = createNamespacedHelpers(PAGE_COMPONENT);

export default {
    name: 'ItemOverview',
    components: {
        SharedComponentWithPreservedState,
    },
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    created() {
        this.$store.registerModule(PAGE_COMPONENT, store);
    },
    destroyed() {
        this.$store.unregisterModule(PAGE_COMPONENT);
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>