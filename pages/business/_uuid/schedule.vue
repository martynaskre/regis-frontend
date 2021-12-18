<template>
  <div>
    <Navbar />
    <div class="p-10 flex justify-end">
      <button class="button button-success" @click="submit">Išsaugoti</button>
    </div>
    <div class="schedule container container-md">
      <div
        v-for="(scheduleEntry, index) in scheduleEntries"
        :key="index"
        class="grid-rows grid-of-3"
      >
        <div>
          <Input
            name="weekDay"
            type="select"
            placeholder="Pasirinkite dieną"
            :options="weekDays"
            v-model="scheduleEntry.weekDay"
            :scheduleInput="true"
          />
        </div>
        <div>
          <Input
            name="startHour"
            type="number"
            placeholder="Pradžios laikas"
            v-model="scheduleEntry.startHours"
            :scheduleInput="true"
          />
        </div>
        <div>
          <Input
            name="finishHour"
            type="number"
            placeholder="Pabaigos laikas"
            v-model="scheduleEntry.finishHours"
            :scheduleInput="true"
          />
        </div>
      </div>
      <div class="schedule-add-container">
        <button
          class="schedule-add"
          @click="addEntry"
          :disabled="scheduleEntries.length >= maxEntries"
        >
          <img src="~assets/img/icons/schedule-add.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxEntries: 7,
      weekDays: [
        'Pirmadienis',
        'Antradienis',
        'Trečiadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Šeštadienis',
        'Sekmadienis',
      ],
      scheduleEntries: [
        {
          weekDay: 0,
          startHours: 10,
          finishHours: 12,
        },
      ],
    };
  },
  methods: {
    addEntry() {
      if (this.scheduleEntries.length < this.maxEntries) {
        this.scheduleEntries.push({
          weekDay: null,
          startHours: null,
          finishHours: null,
        });
      }
    },
    submit() {
      this.$router.push('/business');
    },
  },
};
</script>

<style lang="scss">
@media (max-width: 1100px) {
  .justify-end {
    justify-content: center;
    padding-bottom: 0;
  }
}
</style>
