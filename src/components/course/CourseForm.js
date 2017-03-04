import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form action="">
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.Title}
        />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>

    <TextInput
          name="category"
            label="category"
            value={course.category}
            onChange={onChange}
            error={errors.category}
            />

      <TextInput
        name=""
              label=""
              value={course.authorId}
              defaultOption="Select Author"
              option={allAuthors}
              onChange={onChange}
              error={errors.authorId}
              />

      <TextInput
        name=""
        label=""
        value={course.length}
        defaultOption="Select Author"
        option={allAuthors}
        onChange={onChange}
        error={errors.length}
         />

       <input type="submit"
        disabled={loading}
        value={loading ? 'Saving ...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
         />

    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default CourseForm;
