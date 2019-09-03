<template>
    <div class="page">
        <h2>Navigation</h2>
        <p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Count {{ count }} </p>
        <button @click="incrementCount1()">Increment Count</button>
        <button @click="switchNestedRoute()">Change route</button>
        <hr />
        <router-view name="navigationView" />
    </div>
</template>

<script>
import appStore from '../../store/app';
import store from './store';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Navigation',
    store,
    computed: {
        event() {
            return appStore.getters["Ribbon/getClickEvent"];
        },
        ...mapGetters({
            count: 'getCount',
        }),
    },
    watch: {
        event: {
            handler(newVal, oldVal) {
                switch (this.event.id) {
                    case 'new_requirement': {
                        alert('watch.event fired for root state');
                        break;
                    }
                    default:
                }
            },
        },
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
        incrementCount1() {
            this.incrementCount();
            appStore.dispatch('Ribbon/setClickEvent', {
                id: 'new_requirement',
                data: null,
            });
        },
        switchNestedRoute() {
            this.$router.push({ name: 'Reporting' });
        },
    }
}
</script>