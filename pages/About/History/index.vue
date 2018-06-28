<template>
<section>
    <ol>
        <li>
            <span>1987</span>
        </li>
        <li>
            <span>1988</span>
        </li>
        <li>
            <span>1989</span>
        </li>
    </ol>
</section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    ol{
        list-style: none;
        padding-left : 100px;
        li{
            position: relative;
            bottom: -10px;
            height: 60px;
            width: 30px;
            cursor: default;
            z-index: 1;
            span{

            }
            &:before{
                position: absolute;
                bottom: 8px;
                left: 50%;
                margin-left: -3px;
                width: 6px;
                height: 6px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                background: #35373c;
                content: "";
                -webkit-transition: all .3s;
                -moz-transition: all .3s;
                -o-transition: all .3s;
                -ms-transition: all .3s;
                transition: all .3s;
            }
        }
    }
</style>
