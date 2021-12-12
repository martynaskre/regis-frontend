<template>
  <client-only>
    <div class="notifications">
      <NotificationsGroup v-for="(group, index) in groups"
                          v-bind:key="index"
                          :group="group"
                          :notificationClass="`notification-${group}`" />
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        'error',
        'warning',
        'info',
        'success',
      ],
    }
  },
}
</script>

<style lang="scss">
.notifications {
  position: fixed;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  top: 20px;

  .notification {
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 20px;

    &.notification-error {
      background-color: rgba(245, 48, 48, 0.8);

      .notification-title {
        &:after {
          background: url('~/assets/img/notifications/error.png');
        }
      }
    }

    &.notification-warning {
      background-color: rgba(244, 185, 66, 0.8);

      .notification-title {
        &:after {
          background: url('~/assets/img/notifications/warning.png');
        }
      }
    }

    &.notification-info {
      background-color: rgba(107, 154, 196, 0.8);

      .notification-title {
        &:after {
          background: url('~/assets/img/notifications/info.png');
        }
      }
    }

    &.notification-success {
      background-color: rgba(151, 216, 196, 0.8);

      .notification-title {
        &:after {
          background: url('~/assets/img/notifications/success.png');
        }
      }
    }

    .notification-title {
      font-size: 24px;
      font-family: 'Roboto', sans-serif;

      &:after {
        content: '';
        display: inline-block;
        margin-left: 10px;
        position: relative;
        top: 5px;
        width: 26px;
        height: 26px;
      }
    }

    .notification-description {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
    }
  }
}
</style>
