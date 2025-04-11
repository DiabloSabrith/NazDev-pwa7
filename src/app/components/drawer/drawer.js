import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import styles from "./drawer.module.css"
import { CloseOutlined } from '@ant-design/icons'; 
import Link from 'next/link';
import Image from 'next/image';
const DrawerItem= () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const MyCustomCloseIcon = () => (
    <CloseOutlined style={{ color: '#ee204d' }} />
  );
  return (
    <div className={styles.drawer} >

      <Button className={styles.btn} onClick={showDrawer}>
          <Image
            alt='adja'
            src="/img/menu.png"
            width={30}
            height={30}
          />
      </Button>

   
      <Drawer 
      style={{backgroundColor:'#0c0a18'}}
        title= <p style={{color:'#fff',letterSpacing:3,fontSize:24}}>Меню</p> 
        onClose={onClose} 
        open={open}
        closeIcon={<MyCustomCloseIcon />} 
        >
     
              <div className={styles.linkBlock}>
                   <div className={styles.item} ><Link className={styles.a} href='/sprints'>Sprint</Link></div>
                   <div className={styles.item} ><Link className={styles.a} href='/intensivs'>Интенсивы</Link></div>
                   <div className={styles.item} ><Link className={styles.a} href="/support"> Поддержка</Link></div>
                   <div className={styles.item} ><Link className={styles.a} href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></div>
                   <div className={styles.item} ><Link className={styles.a} href='/author'>Об авторе</Link></div>
                   <div className={styles.item} ><Link className={styles.a} href='https://t.me/Kulturist_ris'>Наше сообщество</Link></div>

              </div>
              

                  <p className={styles.text}>Возраст не важен, важен код! Покажи миру свои возможности  <br/> <span className={styles.span}>(проект создал 17-летним разработчиком)</span></p>
     
      </Drawer>
      </div>
    
  );
};
export default DrawerItem;
