<template>
    <div class="alert" v-if="GET_STATUS_SHOW"
        :class="{ 'success' : GET_DATA.statusRequest, 'error' : !GET_DATA.statusRequest }"
    >

        <div @click="showList" class="alert-error" >
            <ul v-if="GET_DATA.messages.length">
                <li v-for="(error, idx) in GET_DATA.messages" :key="idx">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: "Alert",
        computed: {
            ...mapGetters('alert', ['GET_DATA', 'GET_STATUS_SHOW'])
        },
        methods: {
            ...mapMutations('alert', ['SET_ALERT']),
            showList(){
                this.SET_ALERT({
                    statusShow: false,
                    data: {
                        messages: [],
                        statusRequest: false,
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .alert{
        position: absolute;
        top: 0;
        right: 0;
        background: #999;
        z-index: 100;
        font-size: 18px;
        padding: 20px;
    }
    .success{
        background: green;
    }
    .error{
        background: #d36b6b;
    }
</style>