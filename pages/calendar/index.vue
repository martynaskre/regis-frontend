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
        <div v-if="isBookingNew" class="mt-5">
          <button class="button button-warning" @click="cancelBooking(booking.id)">
            Atšaukti rezervaciją
          </button>
        </div>
      </div>
    </Modal>
    <div class="mt-20"></div>
    <Timetable @entryClick="showBooking"
               :nextButton="true"
               :previousButton="true"
               @previous="fetchBookings"
               @next="fetchBookings"
    >
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
      currentWeek: moment().startOf('isoweek'),
    }
  },
  computed: {
    isBookingNew() {
      if (!this.booking) {
        return false;
      }

      const end = moment(this.booking.reservedTime);
      const duration = moment.duration(end.diff(moment()));

      return duration.asHours() > 24;
    }
  },
  methods: {
    async fetchBookings(date) {
      this.bookings = await this.$store.dispatch('clients/getBookings', {
        startDate: date,
      });

      this.currentWeek = date;

      this.$nextTick(() => {
        this.$nuxt.$emit('refreshTimetable');
      });
    },
    async showBooking(id) {
      this.booking = await this.$store.dispatch('clients/getBooking', id);
    },
    async cancelBooking(id) {
      if (!confirm("Ar tikrai norite atšaukti rezervaciją?")) {
        return;
      }

      const response = await this.$store.dispatch('clients/deleteBooking', id);

      await this.fetchBookings(this.currentWeek);

      if (response) {
        this.booking = null;

        this.$notify(
          {
            group: 'success',
            title: 'Rezervacija sėkmignai atšaukta!',
          },
          2000
        );
      } else {
        this.$notify(
          {
            group: 'error',
            title: 'Įvyko klaida!',
          },
          2000
        );
      }
    }
  }
};
</script>
