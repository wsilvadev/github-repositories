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
                    ? 'text-center q-ml-xl '
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
        <div class="q-mt-xl">
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
                        name="repos"
                        :label="
                            'Repositories (' +
                                this.$route.params.public_repos +
                                ')'
                        "
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
                    <q-tab-panel name="repos">
                        <ul v-for="repos in repositories">
                            <li>{{ repos.name }}</li>
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
            tab: 'overview',
            repositories: []
        };
    },
    mounted() {
        this.openUrl();
    },

    methods: {
        ...mapActions('Posts', ['setPosts']),

        backPath: function() {
            this.$router.push('/');
        },
        openUrl: function() {
            console.log(this.repositories);
            this.setPosts(this.$route.params.login + '/repos').then(
                item => (this.repositories = item)
            );
        }
    }
};
</script>
