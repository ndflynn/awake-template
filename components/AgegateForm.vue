<template>
  <div>
    <form
      target="_blank"
      method="post"
      :action="formAction"
      @submit="$emit('submit', email)"
    >
      <p>Welcome to Fridays Cannabis.</p>
      <h3 class="title">
        We need to check your ID first!
      </h3>
      <div class="field">
        <label class="label is-medium">Province or Territory</label>
        <div class="control">
          <div class="select is-rounded is-large is-info">
            <select placeholder="Small">
              <option>Ontario</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </select>
          </div>
        </div>
      </div>
      <h4 class="title">
        Enter your birthday:
      </h4>
      <div class="field is-grouped">
        <p class="control is-info">
          <label class="label is-medium">Day</label>
          <input
            v-model="selectDay"
            class="input is-large is-rounded is-info input-date has-text-info"
            type="text"
            placeholder="DD"
            maxlength="2"
          />
        </p>
        <p class="control">
          <label class="label is-medium">Month</label>
          <input
            v-model="selectMonth"
            class="input is-large is-rounded is-info input-date has-text-info"
            type="text"
            placeholder="MM"
            maxlength="2"
          />
        </p>
        <p class="control">
          <label class="label is-medium">Year</label>
          <input
            v-model="selectYear"
            class="input is-large is-rounded is-info input-date has-text-info"
            type="text"
            placeholder="YYYY"
            maxlength="4"
          />
        </p>
      </div>
      <div class="control">
        <button type="submit" class="button is-info is-large is-rounded">
          Continue
        </button>
      </div>
      <span v-if="selectYear" class="has-text-info">{{ getAge }}</span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AgegateForm',
  data() {
    return {
      selectProvince: null,
      selectDay: null,
      selectMonth: null,
      selectYear: null
    }
  },
  computed: {
    formAction() {
      if (this.$siteConfig.newsletter.mailchimp.on) {
        return this.$siteConfig.newsletter.mailchimp.formAction
      }
      return this.$siteConfig.newsletter.custom.formAction
    },
    getAge() {
      // `this` points to the vm instance
      const birthday = new Date()
      birthday.setFullYear(this.selectYear)
      birthday.setMonth(this.selectMonth)
      birthday.setDate(this.selectDay)

      const currdate = new Date()
      currdate.setTime(birthday.getTime())
      currdate.setFullYear(new Date().getFullYear())
      currdate.setMonth(new Date().getMonth())
      currdate.setDate(new Date().getDate())

      return (currdate - birthday) / 31557600000
    }
  }
}
</script>
<style lang="scss" scoped>
.title,
.label,
select,
p {
  color: $pink-lighter;
  text-align: left;
  border-color: $pink-lighter;
  font-weight: 400;
}
.input-date {
  max-width: 100px;
}
</style>
