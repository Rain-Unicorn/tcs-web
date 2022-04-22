<template>
  <div id="app" class="page-wrapper">
    <v-header></v-header>
    <div class="page-content">
      <v-sidebar></v-sidebar>
      <v-mainwrap></v-mainwrap>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
}
.page-wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  background: #f5f5f5;
}

.page-wrapper .page-main {
  scrollbar-color: #f46119 #e2ebec;
  scrollbar-width: thin !important;
  -moz-appearance: none !important;
  display: block;
  position: relative;
  height: calc(100vh - 75px);
  padding: 45px;
  overflow-x: hidden;
  overflow-y: auto;
}

.page-wrapper .page-main::-webkit-scrollbar {
  width: 6px;
}

.page-wrapper .page-main::-webkit-scrollbar-track {
  background-color: #e2ebec;
}

.page-wrapper .page-main::-webkit-scrollbar-thumb {
  background-color: #f46119;
}

.page-wrapper .page-main::before {
  display: block;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  content: "";
  opacity: 0;
  pointer-events: none;
}
.page-wrapper .page-main {
  padding: 20px 15px 40px;
}
.page-wrapper .page-content {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  /* padding-top: 75px; */
}
</style>
