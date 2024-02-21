/* eslint-disable react/no-unescaped-entities */
import Form1 from "../../components/App/Forms/Form1";
import Form2 from "../../components/App/Forms/Form2";

const Form = () => {
  return (
    <div>
      <h2 className="text-5xl text-center text-white mt-20">
        Let's Explore All Form
      </h2>
      {/* Default Login Form */}
      <Form1 />
      {/*Login Form With Social Button  */}
      <Form2 />
    </div>
  );
};

export default Form;
