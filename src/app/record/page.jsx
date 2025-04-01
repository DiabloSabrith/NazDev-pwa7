'use client'
import 'animate.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import Link from "next/link"
import Image from "next/image"
export default function Intensivs() {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('Пожалуйста, введите имя')
      .min(2, 'Имя должно быть не менее 2 символов')
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Имя может содержать только буквы и пробелы')
      .trim(),
    lastName: Yup.string()
      .required('Пожалуйста, введите фамилию')
      .min(2, 'Фамилия должно быть не менее 2 символов')
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Фамилия может содержать только буквы и пробелы')
      .trim(),

    email: Yup.string()
      .required('Пожалуйста, введите email')
      .min(6,'Имя почты не может быть короче 6 символом')
      .email('Неверный формат email')
      .trim(),
    phone: Yup.string()
      .required('Пожалуйста, введите номер телефона')  
      .matches(/^\+?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Неверный формат телефона')
      .trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    const sanitizedData = {
      firstName: DOMPurify.sanitize(data.firstName),
      lastName: DOMPurify.sanitize(data.lastName),
      email: DOMPurify.sanitize(data.email),
      phone: DOMPurify.sanitize(data.phone),
    };
    // В этом примере мы просто выводим данные в консоль
    console.log('Отправленные данные:', sanitizedData);
    alert('Форма успешно отправлена (только на клиенте)!');
    reset(); // Очистка формы после отправки
  };
    return( 

        <div className="w-340 h-210 mx-auto containerSprint containerRecord fideInAnim ">
   

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
       {...register("firstName")}
     />
     {errors.firstName && <div className="text-red-400">{errors.firstName.message}</div>} {/*  Это такой оператор если выражение слева истинное то выполнчяеться выражение спарва */}
     <input
       type="text"
       placeholder='Введите фамилию'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("lastName")}
     />
     {errors.lastName && <div className="text-red-400">{errors.lastName.message}</div>}
     <input
       type="text"
       placeholder='Введите почту'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("email")}
     />
     {errors.email && <div className="text-red-400">{errors.email.message}</div>}
     <input
       type="text"
       placeholder='Введите номер телефона'
       className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"
       {...register("phone")}
     />
     {errors.phone && <div className="text-red-400 text-1xl">{errors.phone.message}</div>}
     <button
       type="submit"
       disabled={isSubmitting}
       className=' bg-[#9d4edd] py-[5px] px-[20px] rounded-[10px] w-[80%] h-[50px] transition hover:scale-[1.05]  text-2xl tracking-[2px] record-btn'
     >
       {isSubmitting ? 'Отправка...' : 'Отправить'}
     </button>
   </form>
   </div>

 {/* TODO */}
            </div>
    

        </div>
    )
}