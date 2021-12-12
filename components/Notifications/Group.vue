<template>
  <notificationGroup :group="group">
    <notification v-slot="{notifications}">
      <div class="notification"
           v-bind:class="notificationClass"
           v-for="notification in notifications"
           :key="notification.id">
        <h1 class="notification-title">{{ notification.title }}</h1>
        <p class="notification-description">{{ notification.text }}</p>
      </div>
    </notification>
  </notificationGroup>
</template>

<script>
export default {
  props: {
    group: {
      required: true,
    },
    notificationClass: {
      required: true,
    }
  },
};
</script>
