'use client'

import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import Link from "next/link"
import "./page.scss"  
import Image from "next/image"
export default function Intensivs() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const validationSchema = Yup.object({

    name: Yup.string()
      .required('Пожалуйста, введите имя')
      .min(2, 'Имя должно быть не менее 2 символов')
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Имя может содержать только буквы и пробелы')
      .trim(),
    surname: Yup.string()
      .required('Пожалуйста, введите фамилию')
      .min(2, 'Фамилия должно быть не менее 2 символов')
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Фамилия может содержать только буквы и пробелы')
      .trim(),

   /*  email: Yup.string() */
   /*    .required('Пожалуйста, введите email') */
   /*    .email('Неверный формат email') */
   /*    .test( */
   /*      'gmail || mail', */
   /*      'Введите полное значение', */
   /*    (value) => value && ( value.endsWith('@gmail.com') || value.endsWith('@mail.ru')) */
   /*    ) */
   /*     */
   /*    .trim(),/* убирает случайно введеннные пробелы  */ 
    phone: Yup.string()
      .required('Пожалуйста, введите номер телефона')  
      .matches(/^\+?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Неверный формат телефона')
      .trim(),
  });


  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // 1. Санитизация данных
    const sanitizedData = { 
       name: DOMPurify.sanitize(data.name), 
       surname: DOMPurify.sanitize(data.surname), 
       phone: DOMPurify.sanitize(data.phone), 
       /*   email: DOMPurify.sanitize(data.email),  */
     }; 
    // 2. Вывод в консоль (для отладки) - можно убрать в production
    console.log('Отправленные данные:', sanitizedData);

    try {
        const res = await fetch('https://demo-server-production-048a.up.railway.app/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sanitizedData), // Отправляем санитизированные данные
        });
        if (!res.ok) {
            // Обрабатываем HTTP ошибки
            const errorData = await res.json(); // Пытаемся получить сообщение об ошибке от сервера
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorData?.message || 'Unknown error'}`);
        }
        toast.success('Форма успешно отправлена!'); // Замените на более подходящее уведомление
        reset(); // Очищаем форму только при успешной отправке
    } catch (err) {
        console.error('Ошибка при отправке формы:', err);
        toast.error(`Ошибка: ${err.message}`); // Показываем сообщение об ошибке
    }
   finally{
    setIsSubmitting(false);
   }
  };



    return( 

        <div className="w-340 h-210 mx-auto containerSprint containerRecord fideInAnim ">
          {/* TODO */}

           <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
           />

    {/* TODO */}

            <div className='w-full  h-230  my-20 mx-auto flex  flex-row gap-[30px]  items-center justify-center recordBlock'>
            <button className='btnRecord transition hover:scale-[1.07]  close-btn'><Link href='/'>Назад</Link></button>
              <div className="w-[46%] h-[90%] sprintBlock flex flex-col items-center record-card  recordOne_Block">
                
                <h2 className="text-[#9d4edd] text-6xl font-bold pt-80 ">NazDev</h2>
                <p className="text-[#fff] text-2xl font-medium py-10  ">Стань лучшим разработчиком уже сейчас</p>
              
              </div>
{/* TODO */}
{/*               <div className="w-[46%] h-[90%]  record  recordTwo_Block"> */}
{/*                 <form action="" className=' flex flex-col items-center text-[#fff] gap-[20px] mt-60 form'> */}
{/*                 <label htmlFor="" className="text-3xl text-[#fff]">  Заявка на курс</label> */}
{/*                   <input type="text" placeholder='Enter to first name' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"  />*/ } 
{/*                   <input type="text" placeholder='Enter to last name'  className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input" />*/}
{/*                   <input type="text"  placeholder='Enter to email' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"/> */}
{/*                   <input type="text"  placeholder='Enter to phone' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"/> */}
{/*                 <button className=' bg-[#9d4edd] py-[5px] px-[20px] rounded-[10px] w-[80%] h-[50px] transition hover:scale-[1.05]  text-2xl tracking-[2px]'>Отправить</button> */}
{/*                 </form> */}
{/*               </div> */}

   <div className="w-[46%] h-[90%]  record  recordTwo_Block   flex flex-col items-center ">
    <div className='w-[80px] h-[80px] logoBlock rounded-[50%] mt-[-30px] '>
      <Image
      className='rounded-[50%]'
      width={80}
      height={80}
      src="/img/NazDevLogo.jpg"
      alt='sorry'
      />
    </div>
   <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col items-center text-[#fff] gap-[20px] mt-60 form w-[100%]'>
     <label htmlFor="firstName" className="text-3xl text-[#fff]">Заявка на курс</label>

     <input
       type="text"
       placeholder='Введите имя'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("name")}
     />
     {errors.name && <div className="text-red-400">{errors.name.message}</div>} {/*  Это такой оператор если выражение слева истинное то выполнчяеться выражение спарва */}
     <input
       type="text"
       placeholder='Введите фамилию'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("surname")}
     />
     {errors.surname && <div className="text-red-400">{errors.surname.message}</div>}

  
  
  {/* TODO email */}
  
  

  
     <input
       type="text"
       placeholder='Введите номер телефона'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("phone")}
     />
     {errors.phone && <div className="text-red-400 text-1xl">{errors.phone.message}</div>}

     {/* TODO */}
      <section className='w-[80%] h-20 flex   items-center justify-center'>
        <ReCAPTCHA sitekey ={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        theme='dark'
       />
      </section>
    {/* TODO */}


     <button
       type="submit"
       disabled={isSubmitting}
       className='bg-[#9d4edd] py-[5px] px-[20px] rounded-[10px] w-[80%] h-[50px] transition hover:scale-[1.05]  text-2xl tracking-[2px] record-btn'
     >
       {isSubmitting ? 'Отправка...' : 'Отправить'}
     </button>

   </form>
   </div>
   </div>
    </div>
    )
}