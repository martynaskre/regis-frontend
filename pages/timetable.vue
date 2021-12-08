<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <Timetable>
      <TimetableEntry
        :type="'taken-provider'"
        :occursAt="new Date('2021-12-29 09:00:00')"
        :duration="4"
      />
      <TimetableEntry
        :type="'taken-client'"
        :occursAt="new Date('2021-12-30 09:00:00')"
        :duration="10"
      />
      <TimetableEntry
        :type="'default'"
        :title="'Apsilankymas grožio salone „Grakšti gazelė”'"
        :occursAt="new Date('2021-12-01 09:00:00')"
        :duration="5"
      />
      <TimetableEntry
        :type="'default'"
        :title="'Apsilankymas automobilių servise „Puvena”'"
        :occursAt="new Date('2021-12-01 15:00:00')"
        :duration="2"
      />
    </Timetable>
  </div>
</template>

<script>
export default {};
</script>
