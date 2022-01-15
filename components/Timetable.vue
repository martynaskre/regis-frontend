<template>
  <div class="timetable-wrapper" :class="containerClasses">
    <table class="timetable">
      <thead>
        <tr>
          <th>
            {{ selectedWeek.start | month }}
          </th>
          <th v-for="weekDay in weekDays">
            {{ weekDay.date() }}
            {{ weekDay.locale('lt').format('dddd') }}
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
                 class="timetable-activity"
                 :class="{ 'timetable-activity-clickable': entry.hasOwnProperty('bookingId') }"
                 @click="handleEntryClick(entry)"
            >
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
    <div v-if="showFloatingBar" class="timetable-floating-bar">
      <div v-if="previousButton && !isPreviousWeek" class="timetable-floating-bar-left">
        <button class="timetable-previous" @click="handlePreviousClick">
          <img src="~assets/img/icons/chevron-left.png" />
        </button>
      </div>
      <div class="timetable-floating-bar-center">
        <p v-if="hasDescriptionSlot">
          <slot name="description" />
        </p>
      </div>
      <div v-if="nextButton" class="timetable-floating-bar-right" @click="handleNextClick">
        <button class="timetable-next">
          <img src="~assets/img/icons/chevron-right.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    booking: {
      type: Boolean,
      default: false,
    },
    previousButton: {
      type: Boolean,
      default: false,
    },
    preventOldPrevious: {
      type: Boolean,
      default: false,
    },
    nextButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rawEntries: [],
      selectedWeek: {
        start: moment().startOf('isoweek'),
        end: moment().endOf('isoweek'),
      },
    }
  },
  filters: {
    hours(value) {
      return moment().set('hour', value).set('minute', 0).format('HH:mm');
    },
    month(value) {
      return moment(value).locale('lt').format('MMMM');
    },
  },
  computed: {
    showFloatingBar() {
      return this.previousButton || this.hasDescriptionSlot || this.nextButton;
    },
    isPreviousWeek() {
      if (this.preventOldPrevious) {
        return moment().startOf('isoweek').set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0).toDate().getTime() ===
          this.selectedWeek.start.clone().set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0).toDate().getTime();
      }

      return false;
    },
    hasDescriptionSlot() {
      return !!this.$slots.description
    },
    containerClasses() {
      const classes = [];

      if (this.booking) {
        classes.push('booking-timetable-wrapper')
      }

      if (this.showFloatingBar) {
        classes.push('has-floating-bar')
      }

      return classes.join(' ');
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

      const removeEntries = {};

      this.rawEntries.forEach((entry) => {
        const occursAt = entry.occursAt;

        this.weekDays.forEach((weekDay, index) => {
          if (weekDay.date() === occursAt.date()) {
            if (entries[occursAt.hour()]) {
              entries[occursAt.hour()][index] = entry;

              for (let i = 1; i < entry.duration; i++) {
                if (!removeEntries.hasOwnProperty(occursAt.hour() + i)) {
                  removeEntries[occursAt.hour() + i] = [];
                }

                removeEntries[occursAt.hour() + i].push(index);
              }
            }
          }
        });
      });

      Object.keys(removeEntries).forEach((hour) => {
        const indexes = removeEntries[hour];

        for (const index of indexes) {
          entries[hour].splice(index, 1);
        }
      });

      return entries;
    }
  },
  mounted() {
    this.rawEntries = this.getRawEntries();

    this.$nuxt.$on('refreshTimetable', () => {
      this.rawEntries = this.getRawEntries();
    });
  },
  methods: {
    getRawEntries() {
      const slots = (typeof this.$slots.default === 'object' && this.$slots.default !== null)
        ? this.$slots.default
        : {};

      const entries = Object.keys(slots);

      return (entries.length <= 0)
        ? []
        : entries.map((key) => {
          let entry = this.$slots.default[key];

          if (!entry.tag) {
            return;
          }

          entry = entry.componentOptions.propsData;
          entry.occursAt = moment(entry.occursAt).clone();

          return entry;
        }).filter((entry) => entry !== undefined);
    },
    handlePreviousClick() {
      this.selectedWeek.start = this.selectedWeek.start.clone().subtract(7, 'days');
      this.selectedWeek.end = this.selectedWeek.end.clone().subtract(7, 'days');

      this.$emit('previous', this.selectedWeek.start.format('YYYY-MM-DD'));
    },
    handleNextClick() {
      this.selectedWeek.start = this.selectedWeek.start.clone().add(7, 'days');
      this.selectedWeek.end = this.selectedWeek.end.clone().add(7, 'days');

      this.$emit('next', this.selectedWeek.start.format('YYYY-MM-DD'));
    },
    handleEntryClick(entry) {
      this.$emit('entryClick', entry.bookingId);
    },
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
      return {
        lowest: 0,
        highest: 23,
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

  &.has-floating-bar {
    margin-bottom: 100px;
  }

  .timetable-floating-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, .8);
    z-index: 998;
    display: flex;
    align-items: center;

    .timetable-floating-bar-center {
      margin: 0 auto;
    }

    .timetable-previous,
    .timetable-next {
      width: 50px;
      height: 50px;
      background-color: #6B9AC4;
      border-radius: 50%;
      transition: .3s;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        opacity: .9;
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

          &.timetable-activity-clickable {
            cursor: pointer;
          }

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
