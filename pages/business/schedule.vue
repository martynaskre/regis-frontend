<template>
  <div>
    <Navbar />
    <div class="p-10 flex justify-end">
      <button class="button button-success" @click="submit">
        Išsaugoti
      </button>
    </div>
    <div class="schedule container container-md">
      <div v-for="(scheduleEntry, index) in scheduleEntries"
           :key="index"
           class="grid-rows grid-of-3"
      >
        <div>
          <Input name="weekDay"
                 type="select"
                 placeholder="Pasirinkite dieną"
                 :select-options="weekDays"
                 v-model="scheduleEntry.weekDay"
                 :scheduleInput="true"
                 :displayError="false" />
        </div>
        <div>
          <Input name="startHours"
                 type="number"
                 placeholder="Pradžios laikas"
                 v-model="scheduleEntry.startHours"
                 :scheduleInput="true"
                 :displayError="false" />
        </div>
        <div>
          <Input name="finishHours"
                 type="number"
                 placeholder="Pabaigos laikas"
                 v-model="scheduleEntry.finishHours"
                 :scheduleInput="true"
                 :displayError="false" />
        </div>
      </div>
      <div class="schedule-add-container">
        <button class="schedule-add" @click="addEntry" :disabled="scheduleEntries.length >= maxEntries || hasAnyErrors">
          <img src="~assets/img/icons/schedule-add.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'auth-provider',
  async asyncData({ store, redirect }) {
    const business = await store.dispatch('providers/getBusiness');

    if (!business) {
      redirect('/business');
    }

    const scheduleEntries = await store.dispatch('schedule/get', business.id);

    return { scheduleEntries, business };
  },
  data() {
    return {
      maxEntries: 7,
      weekDays: {
        1: 'Pirmadienis',
        2: 'Antradienis',
        3: 'Trečiadienis',
        4: 'Ketvirtadienis',
        5: 'Penktadienis',
        6: 'Šeštadienis',
        7: 'Sekmadienis',
      },
      scheduleEntries: [],
    };
  },
  computed: {
    ...mapGetters({
      hasAnyErrors: 'errors/hasAnyErrors',
    }),
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
    async submit() {
      const responses = [];

      this.$store.commit('errors/SET_ERRORS', {});

      for (const scheduleEntry of this.scheduleEntries) {
        if (scheduleEntry.hasOwnProperty('id')) {
          responses.push(await this.$store.dispatch('schedule/update', {
            id: scheduleEntry.id,
            ...scheduleEntry
          }));
        } else {
          responses.push(await this.$store.dispatch('schedule/create', {
            businessId: this.business.id,
            ...scheduleEntry
          }));
        }
      }

      if (responses.every((response) => response === true)) {
        this.$notify(
          {
            group: 'success',
            title: 'Darbo laikas atnaujintas!',
          },
          2000
        );
      } else {
        this.$notify(
          {
            group: 'error',
            title: 'Klaida!',
            text: 'Patikrinte, ar nepalikote klaidų darbo grafike.',
          },
          4000
        );
      }
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 1100px) {
  .justify-end {
    justify-content: center;
    padding-bottom: 0;
  }
}
</style>
