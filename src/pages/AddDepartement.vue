<template>
  <div>
    <div class="container">
      <h2>File Upload & Save Data</h2>

      <form style="margin-top: 1rem">
        <input type="file" @change="getFile($event)" class="" multiple />
        <input
          type="button"
          value="upload"
          @click="uploadFile($event)"
          class="btn btn-dark"
        />
      </form>
      <h2 class="my-3">Or Enter Your New Data</h2>

      <form @submit="validateAndSubmit" class="">
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
          <label>Nom</label>
          <input type="text" class="form-control" v-model="nom" />
          <label>Prenom</label>
          <input type="text" class="form-control" v-model="prenom" />
          <label>CIN</label>
          <input type="text" class="form-control" v-model="cin" />
          <label>CNE</label>
          <input type="text" class="form-control" v-model="cne" />
        </fieldset>
        <button class="btn btn-success my-3" type="submit">Save</button>
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
      nom: "",
      prenom: "",
      file: "",
      event: "",
      cin: "",
      cne: "",
      formData: null,
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
        this.nom = res.data.nom;
        this.prenom = res.data.prenom;
        this.cin = res.data.cin;
        this.cne = res.data.cne;
      });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.nom) {
        this.errors.push("Enter valid values");
      } else if (this.nom.length < 5) {
        this.errors.push("Enter atleast 5 characters in Name");
      }

      if (this.errors.length === 0) {
        CourseDataService.createCourse({
          nom: this.nom,
          prenom: this.prenom,
          cin: this.cin,
          cne: this.cne,
        }).then(() => {
          this.$router.push("/courses");
        });
      }
    },
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    uploadFile(event) {
      event.preventDefault();
      console.log(this.file);
      let formData = new FormData();
      formData.append("file", this.file);
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      console.log(formData);
      CourseDataService.uploadFile(formData);
    },
  },

  // saveData() {
  //   CourseDataService.saveData();
  // },
  // created() {
  //   this.refreshCourseDetails();
  // },
};
</script>

<style></style>
