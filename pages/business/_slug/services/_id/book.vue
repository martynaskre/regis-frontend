<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <Timetable :booking="true"
               @book="submit"
    >
      <TimetableEntry
        v-for="(booking, index) in bookings"
        :key="index"
        :type="booking.type"
        :occursAt="new Date(booking.reservedTime)"
        :duration="booking.duration"
        :title="(booking.hasOwnProperty('title')) ? booking.title : null"
      />
    </Timetable>
  </div>
</template>

<script>
export default {
  middleware: 'auth-client',
  async asyncData({ store, route, error }) {
    const slug = route.params.slug;
    const serviceId = Number(route.params.id);

    const services = await store.dispatch('businesses/services', slug);

    const service = services.find((service) => service.id === serviceId);

    if (!service) {
      error({ statusCode: 404, message: 'Tokia paslauga neegzistuoja.' });
    }

    const bookings = await store.dispatch('businesses/fetchBookings', {
      businessId: slug,
    });

    return { service, bookings };
  },
  data() {
    return {
      bookings: [],
    };
  },
  methods: {
    submit({ entry, date }) {
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
        const response = this.$store.dispatch('clients/createBooking', {
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
