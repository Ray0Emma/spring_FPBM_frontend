import axios from "axios";

const INSTRUCTOR = "departement";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`;

class CourseDataService {
  retrieveAllCourses() {
    return axios.get(`${INSTRUCTOR_API_URL}`);
  }

  deleteCourse(id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
  }

  retrieveCourse(id) {
    return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
  }
  updateCourse(id, course) {
    return axios.patch(`${INSTRUCTOR_API_URL}/${id}`, course);
  }

  createCourse(course) {
    return axios.post(`${INSTRUCTOR_API_URL}/`, course);
  }
}

export default new CourseDataService();
