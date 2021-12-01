<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <div class="timetable-wrapper">
      <table class="timetable">
        <tr>
          <th></th>
          <th>
            11 Pr
          </th>
          <th>
            12 Ant
          </th>
          <th>
            13 Tr
          </th>
          <th>
            14 Ket
          </th>
          <th>
            15 Pen
          </th>
          <th>
            16 Šeš
          </th>
          <th>
            17 Sek
          </th>
        </tr>
        <tr>
          <td>
            8:00
          </td>
          <td class="taken-entry"></td>
          <td></td>
          <td class="empty-entry"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            9:00
          </td>
          <td class="taken-entry"></td>
          <td></td>
          <td class="empty-entry"></td>
          <td></td>
          <td class="has-entry" rowspan="2">
            <div class="timetable-activity show-additional-content">
              <h4 class="timetable-activity-heading">
                Apsilankymas grožio salone "Gazelė"
              </h4>
              <p class="timetable-activity-description">
                10:00 - 11:00
              </p>
              <div class="timetable-additional-content">
                <p class="timetable-activity-description">
                  V. Mykolaičio-Putino g. 10, Vilnius 03155
                </p>
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            10:00
          </td>
          <td class="taken-entry"></td>
          <td></td>
          <td class="empty-entry"></td>
          <td></td>
          <td class="has-entry">
            <div class="timetable-activity">
              <h4 class="timetable-activity-heading">
                Treniruotė
              </h4>
              <p class="timetable-activity-description">
                10:00 - 11:00
              </p>
            </div>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.timetable-wrapper {
  padding: 0 4rem;
  overflow-x: auto;
}

.timetable {
  width: 100%;
  position: relative;

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

      &:first-child {
        width: 7%;
      }

      &:last-child {
        border-right: none;
      }
    }

    td {
      &.has-entry {
        padding: 0.25rem 1rem;
      }

      &.taken-entry {
        background-color: $primary-gray;
        opacity: .75;
      }

      &.empty-entry {
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
</style>
