<script setup lang="ts">
import {reactive} from 'vue'
import {myStore} from '@/store/my'
import PersonInfo from './components/PersonInfo.vue'
import PersonAdvantage from './components/PersonAdvantage.vue'
import PositionType from './components/PositionType.vue'
import ExcellentSkill from './components/ExcellentSkill.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectExperience from './components/ProjectExperience.vue'
import EducatiionExperience from './components/EducatiionExperience.vue'

const store=myStore()
store.getResumeDetail()
const state=reactive({

})

const leftBack=()=>{
    history.back()
}

</script>
<template>
    <div class="my-resume">
        <van-nav-bar left-arrow title="我的简历" @click-left="leftBack"/>
        <PersonInfo :item="store.resumeInfo"></PersonInfo>
        <PersonAdvantage></PersonAdvantage>
        <PositionType></PositionType>
        <ExcellentSkill></ExcellentSkill>
        <WorkExperience></WorkExperience>
        <ProjectExperience></ProjectExperience>
        <EducatiionExperience></EducatiionExperience>
        <button class="resumen-btn">预览简历</button>
    </div>
</template>


<style scoped>

.resumen-btn{
    width: 18.72rem;
    height: 2.35rem;
    background: linear-gradient(90deg, #FEA829, #FE8F27);
    border-radius: 0.27rem;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.35rem;
    border: 0;
    position: fixed;
    bottom: 0;
    left: 0rem;
    margin: 0 .64rem .64rem;
    width: calc(100vw - 1.28rem);
}
</style>