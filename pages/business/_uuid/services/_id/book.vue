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
  data() {
    return {
      bookings: [],
    };
  },
  async fetch() {
    this.bookings = await this.$store.dispatch('businesses/fetchBookings', {
      businessId: 1,
    });

    //console.log(this.bookings);
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
        this.$notify(
          {
            group: 'success',
            title: 'Veiksmas sėkmingas',
            text: 'Užsiregistravote paslaugai „Verslas nuo nulio”!',
          },
          2000
        );

        this.$router.push('/calendar');
      }
    }
  }
}
</script>
