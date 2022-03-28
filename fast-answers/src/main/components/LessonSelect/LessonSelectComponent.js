import React from "react";
import { StyledSelect } from "./LessonSelectStyle";
import { lessonConvert } from "./LessonSelectConvert";

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: "9px 11px",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #d5dfe4",
  }),
};

export const LessonSelectComponent = ({
  lessons,
  currentLesson,
  setCurrentLesson,
}) => {
  return (
    <div>
      <p>Выберите Урок</p>
      <StyledSelect
        value={currentLesson}
        onChange={(selectedOption) => setCurrentLesson(selectedOption)}
        options={lessonConvert(lessons)}
        styles={customStyles}
      />
    </div>
  );
};
