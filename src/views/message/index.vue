<script setup lang="ts">
import {reactive} from 'vue'
import FooterTabbar from '@/components/FooterTabbar.vue'
import MessageList from '@/components/list/MessageList.vue'
import {messageStore} from '@/store/message'
const store=messageStore()
store.getSystemMessageList()
store.getChatMessageList()
const state=reactive({
    systemList:[]
})

</script>
<template>
    <div>
        <MessageList :MessageList="store.systemMessageList" type="system"/>
        <MessageList :MessageList="store.chatMessageList" type="talk"/>
        <FooterTabbar/>
    </div>
</template>


<style scoped>

</style>