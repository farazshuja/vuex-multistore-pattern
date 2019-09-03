<template>
    <div class="component">
        <h4>Shared component</h4>
        <p>A shared component with its own state</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
    </div>
</template>

<script>
import store from './store';
import { createNamespacedHelpers } from 'vuex'

const COMPONENT_STORE = 'componentStore';
const { mapGetters, mapActions } = createNamespacedHelpers(COMPONENT_STORE);

export default {
    name: 'SharedComponent',
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    created() {
        this.$store.registerModule(COMPONENT_STORE, store);
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>