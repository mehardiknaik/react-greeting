import { alignmentX, alignmentY } from '@/constant/aligment';
import { background } from '@/constant/background';
import React from 'react';
const initialValues = {
  message: [''],
  background: background[0].name,
  alignmentX: alignmentX[1].name,
  alignmentY: alignmentY[1].name,
  colour: '#e66465',
};
const FormProvider = React.createContext({
  formData: initialValues,
  setFormData: (_: typeof initialValues) => {},
});

const FormContext = ({ children }: any) => {
  const [formData, setFormData] = React.useState(initialValues);
  return (
    <FormProvider.Provider value={{ formData, setFormData }}>
      {children}
    </FormProvider.Provider>
  );
};

export const useFormContext = () => {
  const context = React.useContext(FormProvider);
  if (!context) {
    console.log('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default FormContext;
