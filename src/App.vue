<!-- src/App.vue -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
.container-fluid {
  padding-top: 20px;
}

@media (max-width: 768px) {
  .col-md-3 {
    display: none;
  }

  .col-md-9 {
    width: 100%;
  }
}
</style>
