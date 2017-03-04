//delete

import courseApi from '../api/mockCourseApi';
import * as courseActions from './courseActions';

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(courseActions.loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
