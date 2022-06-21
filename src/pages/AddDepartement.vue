<template>
  <div>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div
            class="alert alert-warning"
            v-bind:key="index"
            v-for="index in errors"
          ></div>
        </div>

        <!-- <fieldset class="form-group">
          <label>Id</label>
          <input type="text" class="form-control" v-model="id" />
        </fieldset> -->
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="description" />
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import CourseDataService from "../service/DepartementDataService";
export default {
  name: "courseDetails",
  data() {
    return {
      description: "",
      INSTRUCTOR: "in28minutes",
      errors: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshCourseDetails() {
      CourseDataService.retrieveCourse(this.id).then((res) => {
        this.description = res.data.name;
      });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.description) {
        this.errors.push("Enter valid values");
      } else if (this.description.length < 5) {
        this.errors.push("Enter atleast 5 characters in Name");
      }

      if (this.errors.length === 0) {
        CourseDataService.createCourse({
          name: this.description,
        }).then(() => {
          this.$router.push("/courses");
        });
      }
    },
  },
  created() {
    this.refreshCourseDetails();
  },
};
</script>

<style></style>
