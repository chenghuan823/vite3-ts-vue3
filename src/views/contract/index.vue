<script setup lang="ts">
import {reactive} from 'vue'
import FooterTabbar from '@/components/FooterTabbar.vue'
import ContractPage from './components/ContractPage.vue'

</script>
<template>
    <div>
        <van-nav-bar title="合约"/>
        <ContractPage/>
        <FooterTabbar/>
    </div>
</template>


<style scoped>

</style>