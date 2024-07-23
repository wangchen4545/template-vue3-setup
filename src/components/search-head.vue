<template>
    <div class="search">
        <div class="tab">
            <ul>
                <li class="acitve">
                    广场
                </li>
                <li>
                    圈子  
                </li>
                <li>
                    热门
                </li>
            </ul>
        </div>
        <div class="search-icon">
            tubiao 
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
    .search{
        height: 80px;
        background: #008DF2;
        .tab{
            width: 100%;
            padding-top: 10px;
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 0 155px 0 123px ;
                box-sizing: border-box;
                
            }
            li{
                width: 112px;
                height: 56px;
                font-family: SourceHanSansCN;
                font-weight: 400;
                font-size: 34px;
                color: #FFF;
                text-align: center;
                line-height: 56px;
                border-radius: 50px;

            }   
            .acitve{
                background:#fff ;
                color: #008DF2;
            }
        }
    }
</style>