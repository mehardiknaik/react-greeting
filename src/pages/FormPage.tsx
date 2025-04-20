import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { Plus, SendHorizontal, Trash2 } from 'lucide-react';
import { background } from '../constant/background';
import { useNavigate } from 'react-router';
import { alignmentX, alignmentY } from '@/constant/aligment';
import { useFormContext } from '@/context/FormContext';
import JSONCrush from 'jsoncrush';

const FormPage = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const handleSubmit = (values: any) => {
    setFormData(values);
    const data = encodeURIComponent(
      JSONCrush.crush(JSON.stringify({ ...values, time: Date.now() })),
    );
    navigate(`/greeting/${data}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-2">
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="space-y-2 bg-white/20 p-4 rounded-md shadow-md w-full max-w-2xl">
            <FieldArray name="message">
              {({ remove, push }) => (
                <section className="bg-gray-950 p-4 rounded-md space-y-2.5 w-full">
                  <h1 className="font-semibold text-xl">Message</h1>
                  {values?.message?.length > 0 &&
                    values.message.map((_, index) => (
                      <div className="flex gap-3 items-center" key={index}>
                        <div className="w-full">
                          <Field
                            name={`message.${index}`}
                            placeholder={`Enter ${index + 1} Message Here...`}
                            type="text"
                            className="w-full p-2 rounded-md bg-gray-800 text-white"
                          />
                          <ErrorMessage
                            name={`message.${index}`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        {values?.message?.length > 1 && (
                          <div>
                            <button type="button" onClick={() => remove(index)}>
                              <Trash2 />
                            </button>
                          </div>
                        )}
                        {index === values?.message?.length - 1 && (
                          <button type="button" onClick={() => push('')}>
                            <Plus />
                          </button>
                        )}
                      </div>
                    ))}
                </section>
              )}
            </FieldArray>
            <section className="bg-gray-950 p-4 rounded-md space-y-2.5">
              <h1 className="font-semibold text-xl">Background</h1>
              <div className="flex gap-3 w-full flex-wrap">
                {background.map((bg) => (
                  <label key={bg.name} className="uppercase">
                    <Field type="radio" name="background" value={bg.name} />
                    {bg.name}
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-gray-950 p-4 rounded-md space-y-2.5">
              <h1 className="font-semibold text-xl">Aligment</h1>
              <div className="ml-2 space-y-2 border-b-2 border-gray-600 pb-2">
                <h2 className="text-lg">X-direction</h2>
                <div className="flex gap-3 w-full flex-wrap">
                  {alignmentX.map((al) => (
                    <label key={al.name} className="uppercase">
                      <Field type="radio" name="alignmentX" value={al.name} />
                      {al.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="ml-2 space-y-2">
                <h2 className="text-lg">Y-direction</h2>
                <div className="flex gap-3 w-full flex-wrap">
                  {alignmentY.map((al) => (
                    <label key={al.name} className="uppercase">
                      <Field type="radio" name="alignmentY" value={al.name} />
                      {al.name}
                    </label>
                  ))}
                </div>
              </div>
            </section>
            <section className="bg-gray-950 p-4 rounded-md space-y-2.5">
              <Field type="color" name="colour" />
            </section>
            <button
              type="submit"
              className="flex gap-2 bg-gray-900 p-2 rounded-md w-full justify-center cursor-pointer hover:bg-gray-800"
            >
              Lets Go <SendHorizontal />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
