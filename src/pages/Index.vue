<template>
    <q-page padding>
        <q-form ref="formSearch">
            <Input
                iconName="search"
                label="Buscar usuários"
                type="text"
                @Search="Submit"
                :rules="[
                    val =>
                        val.length > 1 ||
                        val.length == 0 ||
                        'Pesquisar login existente'
                ]"
            />
            <div :class="size ? 'cardContainer' : 'column'">
                <div
                    class="q-pa-md "
                    v-for="user in posts"
                    :key="user.id"
                    style="max-width: 30rem"
                    @click="route(user)"
                >
                    <q-card class="my-card">
                        <q-parallax :src="user.avatar_url" :height="150">
                            <div
                                class="text-h5 absolute-bottom text-right"
                                style="color: white"
                            >
                                {{ user.name }}
                            </div>
                        </q-parallax>
                    </q-card>
                </div>
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Input from '../components/Input';

export default {
    name: 'PageIndex',
    components: {
        Input
    },
    data() {
        return {
            size: true
        };
    },

    mounted() {
        this.Size();
    },
    computed: {
        ...mapState('Posts', ['posts'])
    },
    methods: {
        ...mapActions('Posts', ['setPosts']),
        Submit: function() {
            this.setPosts().catch(() => {
                this.$q.notify({
                    type: 'negative',
                    message: 'Usu?rio n?o encontrado'
                });
            });
        },
        clearName: function() {
            this.userName = '';
            this.$refs.formSearch.resetValidation();
        },
        Size() {
            if (this.$q.screen.width > 404) {
                this.size = true;
            } else {
                this.size = false;
            }
        },
        route: function(route) {
            this.$router.push({ name: 'repos', params: route });
        }
    }
};
</script>
<style scoped>
.cardContainer {
    display: grid;
    grid-template-columns: 30rem 30rem 30rem;
    grid-gap: 10px;
}
</style>
