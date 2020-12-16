<template>
    <div class="row" style="max-width: 40rem">
        <q-input
            filled
            class="col-md-12 col-sm-12 col-xs-12 "
            outlined
            :value="inputTextChanged"
            @input="changeText"
            :label="label"
            @keyup.enter="Search"
            color="deep-purple"
            :type="type"
            :rules="rules"
        >
            <template v-slot:prepend>
                <q-icon :name="iconName" />
            </template>
            <template v-if="inputTextChanged" v-slot:append>
                <q-icon
                    name="cancel"
                    @click.stop="changeText('')"
                    class="cursor-pointer"
                />
            </template>
        </q-input>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { setInputText } from '../store/posts/actions';
export default {
    props: {
        label: String,
        iconName: String,
        type: String,
        rules: Array
    },
    computed: {
        ...mapGetters('Posts', ['inputTextChanged'])
    },
    methods: {
        ...mapActions('Posts', ['setInputText']),
        Search: function() {
            this.$emit('Search');
        },
        changeText: function(valueText) {
            this.setInputText(valueText);
        }
    }
};
</script>
