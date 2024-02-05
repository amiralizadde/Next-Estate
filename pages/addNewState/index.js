import { useFormik } from 'formik';
import React from 'react'

export default function index({name}) {

 const form = useFormik({
  initialValues:{statusAd:'',
  typeState:'',city:'tehran' , deposit:'' ,monthlyRent:'',
  price:'',meterage:'',belvar:"", fullAddress:"",codePost:''
},

  onSubmit:(values)=>{
    console.log('values ->' , values);
  }

 })

  return (
    <div className='min-h-screen mt-16 px-10 py-16'>

    <form className='border' onSubmit={form.handleSubmit} >
      <div className='grid lg:grid-cols-3'> 
        {/*  وضعیت آگهی */}
        <select className='border' name='statusAd' defaultValue='-1' onChange={form.handleChange}>
          <option value="-1"> وضعیت آگهی ملک را مشخص کنید </option>
          <option value="rent"> اجاره </option>
          <option value="mortgage"> رهن </option>
          <option value="sell"> فروش </option>
        </select>

        <select className='border' name='typeState' defaultValue='-1' onChange={form.handleChange}>
          <option value="-1">    نوع ملک را مشخص کنید  </option>
          <option value="apartment"> آپارتمان </option>
          <option value="home"> خانه حیاط دار </option>
          <option value="land"> زمین و ملک  </option>
          <option value="shop"> مغازه </option>
          <option value="AdministrativeUnit"> واحد اداری  </option>
          <option value="villa"> ویلایی </option>
        </select>

        <select className='border' name='city' defaultValue='-1' onChange={form.handleChange}>
          <option value="tehran"> تهران </option>
        </select>

        {
          form.values.statusAd  === 'rent' ? (
            <div className='w-full border'>
              <input type="text" placeholder=' ودیعه ' name='deposit'  onChange={form.handleChange}/>
              <input type="text" placeholder=' اجاره ' name='monthlyRent' onChange={form.handleChange}/>
            </div>
          ):(
            <input type="text" className='border' placeholder=' مبلغ پیشنهادی ' name='price' onChange={form.handleChange} />
          )
        }

        <input type="text" className='border' name='meterage' onChange={form.handleChange} placeholder=' متراز ملک ' />
        <input type="number" name='room' placeholder='تعدد اتاق' />
        <input type="text"  name='codePost' placeholder='  کد پستی '/>

        <div>
          <input type="text" name='belvar' placeholder=' بلوار/میدان ' />
          <input type="text" name='fullAddress' placeholder=' آدرس  ' />
        </div>

       </div>
       <button type='submit' className='bg-yellow-100 mt-16'> ایجاد آگهی </button>
    </form>


    </div>
  )
}


export async function getStaticProps(context) {

    console.log('context add new State page ->' , context.params);
    
    return{
        props:{name:'amir'}
    }
}