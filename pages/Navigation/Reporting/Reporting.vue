<template>
    <div class="page">
        <h2>Reporting Page</h2>
        <p>This is reporting page. Its creating a sub-store required for Reporting under the pageStore module</p>
        <p>Its also registering a module at root level to show that watches in the parents are fired.</p>
    </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
import store from './store';
import gModule from '../../../store/gModule';


const PAGE_COMPONENT = 'pageReporting';

export default {
    name: 'Reporting',
    created() {
        this.$store.registerModule(PAGE_COMPONENT, store);

        // this fires watches of the parent component
        // if it has <router-view />
        // to fix this always compare new and old value inside the watch
        // see Navigation.vue
        this.$store.registerModule('gModule', gModule);
    },
    destroyed() {
        this.$store.unregisterModule(PAGE_COMPONENT);
        this.$store.unregisterModule('gModule', gModule);
    }
}
</script>