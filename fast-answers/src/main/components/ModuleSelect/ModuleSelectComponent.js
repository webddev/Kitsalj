import React from "react";
import { StyledSelect } from "./ModuleSelectStyle";
import { moduleConvert } from "./ModuleSelectConvert";
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

export const ModuleSelectComponent = ({
  modules,
  currentModule,
  setCurrentModule,
}) => {
  return (
    <div>
      <p>Выберите модуль</p>
      <StyledSelect
        value={currentModule}
        onChange={(selectedOption) => setCurrentModule(selectedOption)}
        options={moduleConvert(modules)}
        styles={customStyles}
      />
    </div>
  );
};
