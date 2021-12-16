<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <Timetable :booking="true"
               @book="submit"
    >
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-13 09:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-13 10:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-13 11:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-13 12:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-13 13:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-client'"
        :occursAt="new Date('2021-12-16 14:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-client'"
        :occursAt="new Date('2021-12-16 15:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-client'"
        :occursAt="new Date('2021-12-16 16:00:00')"
        :duration="1"
      />
      <TimetableEntry
        :type="'taken-client'"
        :occursAt="new Date('2021-12-16 17:00:00')"
        :duration="1"
      />
    </Timetable>
  </div>
</template>

<script>
export default {
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
