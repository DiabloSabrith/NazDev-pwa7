import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import styles from "./drawer.module.css"
import Link from 'next/link';
const DrawerItem= () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.drawer} >

      <Button className={styles.btn} onClick={showDrawer}>
        Меню
      </Button>

   
      <Drawer style={{backgroundColor:'#0c0a18'}}  title= <p style={{color:'#fff'}}>Меню</p> onClose={onClose} open={open}>

       <p ><Link className={styles.a} href='/sprints'>Sprint</Link></p>
       <p ><Link className={styles.a} href='/intensivs'>Интенсивы</Link></p>
       <p ><Link className={styles.a} href="https://naz-dev-125-adaptiv.vercel.app/support"> Поддержка</Link></p>
       <p ><Link className={styles.a} href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></p>
       <p ><Link className={styles.a} href='/author'>О нас</Link></p>

      </Drawer>
      </div>
    
  );
};
export default DrawerItem;
