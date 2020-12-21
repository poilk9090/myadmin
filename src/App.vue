<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  #app{
    height: 100vh;
    background: #2174BC;
    overflow: hidden;
  }
  .login-box{
    width: 610px;
    height: 390px;
    background: #ffffff;
    margin: 50px auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 10px;
    box-sizing: border-box;
  }
</style>
