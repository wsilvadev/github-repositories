<template>
    <div class="row" style="max-width: 40rem">
        <q-input
            filled
            class="col-md-12 col-sm-12 col-xs-12 "
            outlined
            :value="value"
            @input="$emit('input', $event)"
            :label="label"
            @keyup.enter="Search"
            color="deep-purple"
            :type="type"
            :rules="rules"
        >
            <template v-slot:prepend>
                <q-icon :name="iconName" />
            </template>
            <template v-if="value" v-slot:append>
                <q-icon
                    name="cancel"
                    @click.stop="clear"
                    class="cursor-pointer"
                />
            </template>
        </q-input>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        iconName: String,
        type: String,
        value: String,
        rules: Array
    },
    methods: {
        Search: function() {
            this.$emit('Search');
        },
        clear: function() {
            this.$emit('clear');
        }
    }
};
</script>
