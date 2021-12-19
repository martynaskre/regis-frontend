<template>
  <div>
    <Navbar />
    <Modal :show="booking">
      <div v-if="booking">
        <h3 class="mb-10">
          Apsilankymas versle „{{ booking.service.business.title }}”
        </h3>
        <p>
          Paslaugos pavadinimas:
          <b>
            {{ booking.service.title }}
          </b>
        </p>
        <p>
          Paslaugos teikimo pradžia:
          <b>
            {{ booking.reservedTime | humanReadableDate }}
          </b>
        </p>
        <p>
          Paslaugos trukmė:
          <b>
            {{ booking.duration}} valanda
          </b>
        </p>
      </div>
    </Modal>
    <div class="mt-20"></div>
    <Timetable @entryClick="showBooking">
      <TimetableEntry
        v-for="(booking, index) in bookings"
        :key="index"
        :type="booking.type"
        :occursAt="new Date(booking.reservedTime)"
        :duration="booking.duration"
        :title="booking.title"
        :booking-id="booking.id"
      />
    </Timetable>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  middleware: 'auth-client',
  async asyncData({ store }) {
    const bookings = await store.dispatch('clients/getBookings');

    return { bookings };
  },
  filters: {
    humanReadableDate(value) {
      return moment(value).format('Y-MM-DD hh:mm:ss')
    }
  },
  data() {
    return {
      booking: null,
    }
  },
  methods: {
    async showBooking(id) {
      this.booking = await this.$store.dispatch('clients/getBooking', id);
    }
  }
};
</script>
