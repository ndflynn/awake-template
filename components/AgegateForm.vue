<template>
  <div>
    <form method="post" @submit="validateID">
      <label class="control label is-large">
        Welcome to Fridays Cannabis.
      </label>
      <h3 class="title control">
        We need to check your&nbsp;ID&nbsp;first!
      </h3>
      <label class="control label is-large">Province or Territory</label>
      <div class="select is-rounded is-large is-info">
        <select v-model="selectProvince">
          <option value="{ ID: 1, age: '18' }">
            Alberta
          </option>
          <option value="{ ID: 2, age: '19' }">
            British Columbia
          </option>
          <option value="{ ID: 3, age: '19' }">
            Manitoba
          </option>
          <option value="{ ID: 4, age: '19' }">
            New Brunswick
          </option>
          <option value="{ ID: 5, age: '19' }">
            Newfoundland and Labrador
          </option>
          <option value="{ ID: 6, age: '19' }">
            Northwest Territories
          </option>
          <option value="{ ID: 7, age: '19' }">
            Nova Scotia
          </option>
          <option value="{ ID: 8, age: '19' }">
            Nunavut
          </option>
          <option selected value="{ ID: 9, age: '19' }">
            Ontario
          </option>
          <option value="{ ID: 10, age: '19' }">
            Prince Edward Island
          </option>
          <option value="{ ID: 11, age: '21' }">
            Quebec
          </option>
          <option value="{ ID: 12, age: '19' }">
            Saskatchewan
          </option>
          <option value="{ ID: 13, age: '19' }">
            Yukon
          </option>
        </select>
      </div>

      <h4 class="title control">
        Enter your birthday:
      </h4>
      <div class="field is-grouped">
        <p class="control">
          <label class="label is-large">Day</label>
          <input
            id="inputDateDay"
            v-model="selectDay"
            :class="{
              input: true,
              inputDate: true,
              'is-large': isLarge,
              'is-rounded': isRounded,
              'is-info': isInfo,
              'has-text-info': hasTextInfo
            }"
            type="text"
            placeholder="DD"
            maxlength="2"
          />
        </p>
        <p class="control">
          <label class="label is-large">Month</label>
          <input
            id="inputDateMonth"
            v-model="selectMonth"
            :class="{
              input: true,
              inputDate: true,
              'is-large': isLarge,
              'is-rounded': isRounded,
              'is-info': isInfo,
              'has-text-info': hasTextInfo
            }"
            type="text"
            placeholder="MM"
            maxlength="2"
          />
        </p>
        <p class="control">
          <label class="label is-large">Year</label>
          <input
            id="inputDateYear"
            v-model="selectYear"
            :class="{
              input: true,
              inputDate: true,
              'is-large': isLarge,
              'is-rounded': isRounded,
              'is-info': isInfo,
              'has-text-info': hasTextInfo
            }"
            type="text"
            placeholder="YYYY"
            maxlength="4"
          />
        </p>
      </div>
      <button
        class="button is-info is-large is-rounded has-text-primary"
        type="submit"
        value="Submit"
      >
        Continue
      </button>
      <span v-if="selectYear" class="control has-text-info">{{ getAge }}</span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AgegateForm',
  data() {
    return {
      hasErrors: false,
      selectProvince: null,
      selectDay: null,
      selectMonth: null,
      selectYear: null,
      formValid: true,
      selectDayValid: true,
      isRounded: true,
      isInfo: true,
      hasTextInfo: true,
      isLarge: true,
      image: '/uploads/home-hero.jpg'
    }
  },
  computed: {
    getAge() {
      // `this` points to the vm instance
      const birthday = new Date()
      birthday.setFullYear(this.selectYear)
      birthday.setMonth(this.selectMonth - 1)
      birthday.setDate(this.selectDay - 1)

      const currdate = new Date()
      currdate.setTime(birthday.getTime())
      currdate.setFullYear(new Date().getFullYear())
      currdate.setMonth(new Date().getMonth())
      currdate.setDate(new Date().getDate())

      return (currdate - birthday) / 31557600000
    }
  },
  methods: {
    validateID(e) {
      this.hasErrors = false
      const inputDateDay = document.getElementById('inputDateDay')
      const inputDateDayField = isNaN(this.selectDay)
      const inputDateMonth = document.getElementById('inputDateMonth')
      const inputDateMonthField = isNaN(this.selectMonth)
      const inputDateYear = document.getElementById('inputDateYear')
      const inputDateYearField = isNaN(this.selectYear)
      if (this.selectDay && !inputDateDayField) {
        inputDateDay.classList.remove('is-danger')
      } else {
        inputDateDay.classList.add('is-danger')
        this.hasErrors = true
      }
      if (this.selectMonth && !inputDateMonthField) {
        inputDateMonth.classList.remove('is-danger')
      } else {
        inputDateMonth.classList.add('is-danger')
        this.hasErrors = true
      }
      if (this.selectYear && !inputDateYearField) {
        inputDateYear.classList.remove('is-danger')
      } else {
        inputDateYear.classList.add('is-danger')
        this.hasErrors = true
      }

      if (this.hasErrors === false) {
        console.log(
          'modal errors: ' +
            this.hasErrors +
            ', ' +
            this.selectProvince.value.age
        )
      } else {
      }

      e.preventDefault()
    }
  }
}
</script>
<style lang="scss" scoped>
form {
  z-index: 100;
  text-align: left;
}
h4,
.button {
  margin-top: 3rem;
}
h3.title {
  font-size: 3rem;
}
.hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.title,
.label,
select,
p {
  color: $pink-lighter;
  text-align: left;
  border-color: $pink-lighter;
  font-weight: 400;
}
.select.is-rounded.is-large,
.input.is-rounded.is-large {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-color: $pink-lighter;
  color: $pink-lighter;
}
.input.is-rounded.is-large.is-danger {
  border-color: red;
}
.input.is-rounded.is-large {
  padding: 1em;
}
.select select option {
  color: $pink-lighter;
}
.inputDate {
  max-width: 86px;
}
::placeholder {
  color: $pink-lighter;
  opacity: 0.5;
}
</style>
