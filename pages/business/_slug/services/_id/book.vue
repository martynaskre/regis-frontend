<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <Timetable :booking="true"
               :nextButton="true"
               :previousButton="true"
               :preventOldPrevious="false"
               @book="submit"
               @previous="fetchCalendar"
               @next="fetchCalendar"
    >
      <TimetableEntry
        v-for="(booking, index) in bookings"
        :key="generateKey()"
        :type="booking.type"
        :occursAt="new Date(booking.reservedTime)"
        :duration="booking.duration"
        :title="(booking.hasOwnProperty('title')) ? booking.title : null"
      />

      <template v-slot:description>
        {{ business.category.title }} - „{{ business.title }}” | {{ service.title }}
      </template>
    </Timetable>
  </div>
</template>

<script>
export default {
  middleware: 'auth-client',
  async asyncData({ store, route, error }) {
    const slug = route.params.slug;
    const serviceId = Number(route.params.id);

    const business = await store.dispatch('businesses/get', slug);
    const services = await store.dispatch('businesses/services', slug);

    const service = services.find((service) => service.id === serviceId);

    if (!service) {
      error({ statusCode: 404, message: 'Tokia paslauga neegzistuoja.' });
    }

    const bookings = await store.dispatch('businesses/fetchCalendar', {
      businessId: slug,
    });

    return { service, bookings, business, slug };
  },
  data() {
    return {
      bookings: [],
    };
  },
  methods: {
    generateKey() {
      return Math.floor(Math.random() * (1000000 - 1)) + 1;
    },
    async fetchCalendar(date) {
      this.bookings = await this.$store.dispatch('businesses/fetchCalendar', {
        businessId: this.slug,
        startDate: date,
      });

      this.$nextTick(() => {
        this.$nuxt.$emit('refreshTimetable');
      });
    },
    async submit({ entry, date }) {
      if (Object.keys(entry).length > 0) {
        this.$notify(
          {
            group: 'error',
            title: 'Klaida',
            text: 'Šis laikas jau užimtas!',
          },
          2000
        );
      } else {
        const response = await this.$store.dispatch('clients/createBooking', {
          reservedTime: date,
          serviceId: this.service.id,
        })

        if (response) {
          this.$notify(
            {
              group: 'success',
              title: 'Veiksmas sėkmingas',
              text: `Užsiregistravote paslaugai „${this.service.title}”!`,
            },
            2000
          );

          this.$router.push('/calendar');
        } else {
          this.$notify(
            {
              group: 'error',
              title: 'Klaida',
              text: 'Šis laikas jau užimtas!',
            },
            2000
          );
        }
      }
    }
  }
}
</script>
