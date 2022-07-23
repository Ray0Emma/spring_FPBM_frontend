<template>
  <div class="container-lg">
    <div class="row justify-content-center mt-5">
      <div class="col-6 text-center mt-4">
        <h1>All Departements</h1>
        <div v-if="message" class="alert alert-success">
          {{ message }}
        </div>
      </div>

      <div class="col-10 mt-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">CIN</th>
              <th scope="col">CNE</th>
              <!-- <th scope="col">Filiere</th> -->
              <th scope="col">Modifier</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          <tbody v-for="dep in departement" v-bind:key="dep.id">
            <tr>
              <td>{{ dep.id }}</td>
              <td>{{ dep.nom }}</td>
              <td>{{ dep.prenom }}</td>
              <td>{{ dep.cin }}</td>
              <td>{{ dep.cne }}</td>
              <!-- <td>{{ dep.etudiant_collection_filiere_id }}</td> -->
              <td>
                <button
                  class="btn btn-success"
                  v-on:click="updateCourseClicked(dep.id)"
                >
                  Modifier
                </button>
              </td>
              <td>
                <button
                  class="btn btn-warning"
                  v-on:click="deleteCourseClicked(dep.id)"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <button class="btn btn-primary" v-on:click="addCourseClicked()">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DepartementDataService from "../service/DepartementDataService";
export default {
  name: "CoursesList",
  data() {
    return {
      departement: [],
      message: null,
      INSTRUCTOR: "in28minutes",
    };
  },
  methods: {
    refreshCourses() {
      DepartementDataService.retrieveAllCourses() //HARDCODED
        .then((response) => {
          this.departement = response.data;
        });
    },
    deleteCourseClicked(id) {
      DepartementDataService.deleteCourse(id).then(() => {
        this.message = `Delete of course ${id} Successful`;
        this.refreshCourses();
      });
    },
    updateCourseClicked(id) {
      this.$router.push(`/courses/${id}`);
    },
    addCourseClicked() {
      this.$router.push(`/adddep`);
    },
  },
  created() {
    this.refreshCourses();
  },
};
</script>

<style scoped>
h1 {
  color: #59b984;
}
</style>
