<template>
    <q-page padding>
        <q-toolbar>
            <q-btn
                flat
                round
                dense
                icon="arrow_back"
                @click="backPath"
                class="q-mr-sm"
            />
        </q-toolbar>
        <div
            :class="
                this.$q.screen.width > 402
                    ? 'text-center q-ml-xl'
                    : 'text-center '
            "
        >
            <q-avatar
                :size="this.$q.screen.width > 402 ? '18rem' : '7rem'"
                class="shadow-13"
            >
                <img :src="this.$route.params.avatar_url" />
            </q-avatar>
            <div class="text-h6 text-weight-regular q-mt-xs ">
                {{ this.$route.params.name }}
            </div>
        </div>
        <div class="q-gutter-y-md q-mt-xs">
            <q-card>
                <q-tabs
                    v-model="tab"
                    dense
                    class="bg-grey-3 text-grey-7"
                    active-color="primary"
                    indicator-color="purple"
                    align="justify"
                >
                    <q-tab name="overview" label="overview" />
                    <q-tab
                        name="repositories"
                        :label="
                            'Repositories (' +
                                this.$route.params.public_repos +
                                ')'
                        "
                        v-on:click="setRepositories"
                    />
                </q-tabs>

                <q-tab-panels
                    v-model="tab"
                    animated
                    class="bg-teal-10 text-white"
                >
                    <q-tab-panel name="overview">
                        <div class="text-h6">Bio</div>
                        {{ this.$route.params.bio }}
                    </q-tab-panel>
                    <q-tab-panel name="repositories">
                        <ul v-for="repository in repos">
                            <li>{{ repository.name }}</li>
                        </ul>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'PageRepos',
    data() {
        return {
            tab: 'overview'
        };
    },
    computed: {
        ...mapState('Posts', ['repos'])
    },

    methods: {
        ...mapActions('Posts', ['setRepos']),

        backPath: function() {
            this.$router.push('/');
        },

        setRepositories: function() {
            this.setRepos(this.$route.params.login).catch(error => {
                this.$q.notify({
                    type: 'negative',
                    message: error
                });
            });
        }
    }
};
</script>
