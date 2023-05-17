import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCategories } from "../../api/api";

interface DialogFormProps {
  categoryId: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  categoryId?: string;
  categoryName?: string;
  categoryLetter?: string;
  categoryImage?: File | null;
}

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Category name is required"),
  categoryLetter: Yup.string().required("Category letter is required"),
  categoryImage: Yup.mixed()
    .test("fileFormat", "Invalid file format", (value) => {
      if (value && value instanceof File) {
        const supportedFormats = ["image/jpeg", "image/png"];
        return supportedFormats.includes(value.type);
      }
      return true;
    })
    .nullable()
    .required("Category image is required"),
});

const CategoryDialogForm: React.FC<DialogFormProps> = ({
  categoryId,
  isOpen,
  onClose,
  onSubmit,
}) => {

  const initialValues: FormData = {
    categoryName: "",
    categoryLetter: "",
    categoryImage: null,
  };

  const handleSubmit = (values: FormData) => {
    onSubmit(values);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-80 rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Dialog Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="categoryName" className="block mb-1">
                Category Name:
              </label>
              <Field
                type="text"
                id="categoryName"
                name="categoryName"
                className="w-full border rounded py-2 px-3 focus:outline-none"
              />
              <ErrorMessage
                name="categoryName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryLetter" className="block mb-1">
                Category Letter:
              </label>
              <Field
                type="text"
                id="categoryLetter"
                name="categoryLetter"
                className="w-full border rounded py-2 px-3 focus:outline-none"
              />
              <ErrorMessage
                name="categoryLetter"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryImage" className="block mb-1">
                Category Image:
              </label>
              <Field
                type="file"
                id="categoryImage"
                name="categoryImage"
                className="w-full"
              />
              <ErrorMessage
                name="categoryImage"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CategoryDialogForm;
