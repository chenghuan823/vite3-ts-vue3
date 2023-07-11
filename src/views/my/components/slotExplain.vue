<script setup lang="ts">
</script>

<template>
    <div class="content">
        <slot></slot>
        <p>最终解释权归IT企业服务平台所有</p>
    </div>
</template>

<style scoped>

.content{
    padding: .83rem .67rem;
}
.content p{
    color: #666;
    font-size: .53rem;
}
</style>