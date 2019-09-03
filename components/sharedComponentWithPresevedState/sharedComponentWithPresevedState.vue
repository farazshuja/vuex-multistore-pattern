<template>
    <div class="component">
        <h4>Shared component with preserved state</h4>
        <p>A shared component with its own state but state will be preserved across pages!!</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
    </div>
</template>

<script>
import store from './store';
import { createNamespacedHelpers } from 'vuex'

const COMPONENT_STORE = 'componentSharedStore';
const { mapGetters, mapActions } = createNamespacedHelpers(COMPONENT_STORE);

export default {
    name: 'SharedComponentWithPreservedState',
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    created() {
        if (!this.$store.state[COMPONENT_STORE]) {
            this.$store.registerModule(COMPONENT_STORE, store);
        }
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    },
    destroyed() {
        this.$store.unregisterModule(COMPONENT_STORE);
    }
}
</script>