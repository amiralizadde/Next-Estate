import NavbarAuth from "@/components/modules/NavbarAuth";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useFormik } from "formik";
import { loginUser } from "@/services/axios/requests/UserAuth";
import swal from "sweetalert";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  let router = useRouter()
  let form = useFormik({
    initialValues: { identifire: "", password: "" },

    validate:(values)=>{

      let errors={}

      if (!values.identifire.trim()) {
        errors.identifire="Not Valid"
      }else if(values.identifire.length<3){
        errors.identifire="Not true"
      }

      if (!values.password.trim()) {
        errors.password="Not Valid"
      }else if(values.password.length<3){
        errors.password="Not true"
      }

      return errors

    },
    onSubmit: (values) => {
      signinUser(values)
    },
  });


  const signinUser =async (data) =>{
    
    await loginUser(data).then((response) => {
      swal({
        title: "Good",
        text: 'Login Successfully',
        icon: "success",
      });
      router.replace("/");
    })
    .catch((err) => {
      swal({
        title: "oh!",
        text: err,
        icon: "warning",
      });
    });

  }

  return (
    <>
    <Head>
      <title> صفحه ورود </title>
    </Head>
    <div className="flex flex-col items-center justify-center">
      {/* <HeaderAuth /> */}
      <div className="my-24 min-h-96 w-[300px] sm:w-[500px] border ">
        <NavbarAuth />
        <form  className="p-10" onSubmit={form.handleSubmit}>
          <input
            type="text"
            name="identifire"
            className={` ${
              form.errors.identifire &&
              form.touched.identifire &&
              "border-red-500"
            } border w-full p-2 placeholder:ps-2 placeholder:text-sm`}
            placeholder="نام کاربری | ایمیل"
            value={form.values.identifire}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="password"
            name="password"
            className={` ${
              form.errors.password && form.touched.password && "border-red-500"
            } border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder=" رمز عبور "
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <div className="flex items-center my-2">
            <input type="checkbox" id="rememberUserPassword" />
            <label htmlFor="rememberUserPassword" className="text-xs mx-2">
              مرا به خاطر بسپار
            </label>
          </div>
          <div>
            <Link
              href="/auth/passwordRecovery"
              className="text-black/50 text-sm"
            >
              رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>

          <button type="submit" className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded">
            ورود
          </button>
        </form>
        <div className=" text-center flex flex-col items-center justify-center mt-5">
          <p className="text-sm text-black/50 py-4">
            <span className=""> ورود توسط شبکه های اجتماعی </span>
            <span className="py-4  flex items-center justify-center child:mx-4   child:text-xl">
              <span className="border rounded-full p-1 ">
                <FaGoogle className="w-[18px] h-[18px] " />
              </span>
              <span className="border rounded-full p-1 ">
                <FaFacebookF className="w-[18px] h-[18px] " />
              </span>
            </span>
          </p>
          <p className="text-sm text-black/50 w-1/2">
            با ایجاد حساب/ورود
            <span className="text-blue-500 cursor-pointer">شرایط و ضوابط</span>
            ما را قبول میکنید
          </p>
        </div>
      </div>
    </div>
    </>

  );
};

export async function getStaticProps (context) {
  
  console.log('context -> ' , context);

  return{
    props:{}
  }
}

export default index;
