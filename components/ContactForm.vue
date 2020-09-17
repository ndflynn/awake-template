<template>
  <form>
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control">
        <input
          class="input is-medium is-rounded"
          type="text"
          placeholder="John Smith"
        />
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control">
        <input
          class="input is-medium is-rounded"
          type="email"
          placeholder="you@email.com"
        />
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Subject</label>
      <div class="control">
        <input
          class="input is-medium is-rounded"
          type="text"
          placeholder="Brief Summary"
        />
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Message</label>
      <div class="control">
        <textarea
          class="textarea is-rounded"
          placeholder="Detailed description of your comment, request, etc"
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary is-rounded">
        Submit
      </button>
    </div>
  </form>
</template>
