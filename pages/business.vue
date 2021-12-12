<template>
  <div>
    <Navbar />
    <div class="centering">
      <div class="CreateEvent">Create event</div>
      <div class="infoBox">
        <div class="column">
          <div class="row">
            <h2>Event name:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>Email:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>Address:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>Logo:</h2>
            <input type="file">
          </div>
        </div>
        <div class="column">
          <div class="row">
            <h2>Event category:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>Phone:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>ZIP:</h2>
            <input class="input" />
          </div>
          <div class="row">
            <h2>Cover:</h2>
            <input type="file">
          </div>
        </div>
      </div>
      <div class="descriptionBox">
        <h2>Description:</h2>
        <textarea class="descriptionInput" />
      </div>
      <button class="submitBTN">Submit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.centering {
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.CreateEvent {
  margin-top: 50px;
  width: 50%;
  height: 50px;
  border-radius: 20px;
  background-color: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.infoBox {
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  .column {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
    .row {
      width: 100%;
      height: 50px;
      border-radius: 20px;
      background-color: #c4c4c4;
      padding: 0 10px 0 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      .input {
        width: 80%;
        height: 80%;
        background-color: #dcdcdc;
        border-radius: 15px;
        outline: none;
        padding: 5px;
      }
    }
  }
}

.descriptionBox {
  width: 50%;
  height: 250px;
  border-radius: 20px;
  background-color: #c4c4c4;
  display: flex;
  //   align-items: center;
  justify-content: space-between;

  padding: 10px;
  .descriptionInput {
    width: 85%;
    background-color: #dcdcdc;
    border-radius: 20px;
    outline: none;
    padding: 10px;
  }
}
.submitBTN {
  height: 55px;
  width: 18%;
  background-color: #97d8c4;
  border-radius: 20px;
  font-size: 25px;
  margin-top: 20px;
}
</style>
