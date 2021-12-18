<template>
  <div class="timetable-wrapper" :class="containerClasses">
    <table class="timetable">
      <thead>
        <tr>
          <th></th>
          <th v-for="weekDay in weekDays">
            {{ weekDay.date() }}
            {{ weekDay.format('dddd') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entries, time) in entries">
          <td>
            {{ time | hours }}
          </td>
          <td v-for="(entry, index) in entries"
              :rowspan="(Object.entries(entry).length !== 0) ? entry.duration : 1"
              :class="mapEntryClasses(entry)"
              @click="handleClick(time, index)">
            <div v-if="entry.type === 'default' && Object.entries(entry).length !== 0"
                 class="timetable-activity">
              <h4 class="timetable-activity-heading">
                {{ entry.title }}
              </h4>
              <p class="timetable-activity-description">
                {{ entry.occursAt.format('HH:mm') }} - {{ entry.occursAt.clone().add(entry.duration, 'hours').format('HH:mm') }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    booking: {
      type: Boolean,
      default: false
    },
  },
  filters: {
    hours(value) {
      return moment().set('hour', value).set('minute', 0).format('HH:mm');
    }
  },
  computed: {
    containerClasses() {
      return (this.booking)
        ? 'booking-timetable-wrapper'
        : '';
    },
    selectedWeek() {
      return {
        start: moment().startOf('isoweek'),
        end: moment().endOf('isoweek')
      }
    },
    weekDays() {
      const now = this.selectedWeek.start.clone();
      let weekDays = [];

      while (now.isSameOrBefore(this.selectedWeek.end)) {
        weekDays.push(now.clone());

        now.add(1, 'days');
      }

      return weekDays;
    },
    rawEntries() {
      const entries = Object.keys(this.$slots.default);

      return (entries.length <= 0)
        ? []
        : entries.map((key) => {
          let entry = this.$slots.default[key];

          if (!entry.tag) {
            return;
          }

          entry = entry.componentOptions.propsData;
          entry.occursAt = moment(entry.occursAt);

          return entry;
        }).filter((entry) => entry !== undefined);
    },
    entries() {
      const entryPoints = this.findEntryPoints();
      const entries = {};

      for (let i = entryPoints.lowest; i <= entryPoints.highest; i++) {
        if (!entries.hasOwnProperty(i)) {
          entries[i] = [];
        }

        this.weekDays.forEach((weekDay) => {
          entries[i].push({});
        });
      }

      this.rawEntries.forEach((entry) => {
        const occursAt = entry.occursAt;

        this.weekDays.forEach((weekDay, index) => {
          if (weekDay.date() === occursAt.date()) {
            if (entries[occursAt.hour()]) {
              entries[occursAt.hour()][index] = entry;

              for (let i = 1; i < entry.duration; i++) {
                entries[occursAt.hour() + i].pop();
              }
            }
          }
        });
      });

      return entries;
    }
  },
  methods: {
    handleClick(time, entryIndex) {
      const entry = this.entries[time][entryIndex];
      const date = new Date(this.weekDays[entryIndex].clone()
        .toDate()
        .setHours(time));

      this.$emit('book', {
        entry,
        date,
      });
    },
    mapEntryClasses(entry) {
      switch (entry.type) {
        case 'taken-provider':
          return 'taken-provider';
        case 'taken-client':
          return 'taken-client';
        case 'default':
          return 'has-entry';
        default:
          return '';
      }
    },
    findEntryPoints() {
      let lowest = undefined;
      let highest = undefined;

      this.rawEntries.forEach((entry) => {
        const occursAt = entry.occursAt.hour();
        const endsAt = entry.occursAt.clone().add(entry.duration, 'hours').hour();

        if (!lowest || occursAt < lowest) {
          lowest = occursAt;
        }

        if (!highest || endsAt > highest) {
          highest = endsAt;
        }
      });

      return {
        lowest,
        highest,
      }
    }
  }
}
</script>

<style lang="scss">
.timetable-wrapper {
  padding: 0 4rem;
  overflow-x: auto;
  width: 100%;

  &.booking-timetable-wrapper {
    .timetable {
      td {
        cursor: not-allowed;

        &:not(.taken-provider):not(.taken-client):not(.has-entry) {
          cursor: pointer;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    padding: 0 1rem;
  }

  .timetable {
    position: relative;
    width: 100%;
    table-layout: fixed;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 1px white, inset 0 0 0 1px white;
    }

    tr {
      position: relative;
      z-index: 1;

      &:last-child {
        th,
        td {
          border-bottom: none;
        }
      }

      th,
      td {
        width: (93% / 7);
        border: 0.5px solid rgba(0, 0, 0, 0.34);
        padding: 1rem;

        @include media-breakpoint-down(md) {
          width: calc(80vw - 1rem);
        }

        &:first-child {
          width: 7%;
          text-align: center;

          @include media-breakpoint-down(md) {
            //background-color: black;
            width: 20vw;
          }
        }

        &:last-child {
          border-right: none;
        }
      }

      td {
        &.has-entry {
          padding: 0.25rem 1rem;
        }

        &.taken-provider {
          background-color: $primary-gray;
          opacity: .75;
        }

        &.taken-client {
          background-color: $primary-green;
          opacity: .75;
        }

        .timetable-activity {
          background-color: $primary-green;
          border-radius: 1rem;
          padding: 0.75rem;

          .timetable-activity-heading {
            font-size: 0.75rem;
            text-decoration: underline;
          }

          .timetable-activity-description {
            font-size: 0.75rem;
          }

          .timetable-additional-content {
            display: none;
            margin-top: 0.5rem;
          }

          &.show-additional-content {
            .timetable-additional-content {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
