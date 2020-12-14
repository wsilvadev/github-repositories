<template>
    <q-layout view="hhh lpR fFf">
        <q-header elevated class="bg-grey-10 text-white" reveal>
            <q-toolbar>
                <q-toolbar-title class="text-center">
                    Github
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
