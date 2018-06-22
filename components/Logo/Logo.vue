<template>
    <div class="logo">
        <p class="logo-comment">/* 안녕하세요 반갑습니다 */</p>
        <p class="logo-function">
            <span class="function-anot">#FrontendDeveloper </span>
            <span class="function-name">Name </span>
            <span class="function-bracket">{</span>
        </p>
        <p class="logo-title">박혜성</p>
        <p class="logo-function">
            <span class="function-bracket">}</span>
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.logo{
    font-family: 'Ubuntu','Gothic A1', sans-serif;
    color: white;
    p{
        margin: 0px;
        line-height: 1;
        padding-top:1vw;
        padding-bottom:1vw;
    }
    .logo-comment{
        font-size: 1.6vw;
        font-weight: 400;
        color: #7c7c7c;
    }
    .logo-function{
        font-weight: 600;
        font-size: 1.8vw;
        padding-left: 0.1vw;
        span{
            margin-right:0.5vw;
        }
        .function-anot{
            color: #839456;
        }
        .function-name{
            color: #A13074;
        }
    }
    .logo-title{
        font-weight: 900;
        font-size: 9vw;
        color: #3EADE0;
        border-left: 0.1vw solid #505054;
        padding-left: 1vw;
    }
}
</style>
