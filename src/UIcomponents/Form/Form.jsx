/* eslint-disable react/no-unescaped-entities */
import Form1 from "../../components/App/Forms/Form1";
import Form10 from "../../components/App/Forms/Form10";
import Form11 from "../../components/App/Forms/Form11";
import Form12 from "../../components/App/Forms/Form12";
import Form13 from "../../components/App/Forms/Form13";
import Form14 from "../../components/App/Forms/Form14";
import Form2 from "../../components/App/Forms/Form2";
import Form3 from "../../components/App/Forms/Form3";
import Form4 from "../../components/App/Forms/Form4";
import Form5 from "../../components/App/Forms/Form5";
import Form6 from "../../components/App/Forms/Form6";
import Form7 from "../../components/App/Forms/Form7";
import Form8 from "../../components/App/Forms/Form8";
import Form9 from "../../components/App/Forms/Form9";

const Form = () => {
  return (
    <div>
      <h2 className="text-5xl text-center text-white mt-20">
        Let's Explore All Form
      </h2>
      {/* Default Login Form */}
      <Form12 />
      <Form13 />
      <Form1 />
      {/*Login Form With Social Button  */}
      <Form2 />
      {/* Sign in Form */}
      <Form3 />
      {/* Login form with buttons */}
      <Form4 />
      {/* sign up form */}
      <Form5/>
      {/*  */}
      <Form6/>
      {/* Login Form */}
      <Form7/>
      <Form8/>
      <Form9/>
      {/* Shoping Cart Form */}
      <Form10/>
      <Form11/>
      <Form14/>
    </div>
  );
};

export default Form;
