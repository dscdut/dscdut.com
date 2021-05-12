import React from 'react';
import Link from 'next/link';
import { Avatar } from 'antd';
import styles from '../styles/Dropdown.module.scss'

export const Dropdown = ( members ) => {
     console.log(members);
     return(
          members.map(member => {
               return(
                    <Link href={'/members/' + member.id} key={member.id}>
                         <div className={styles.single}>
                              <Avatar src={member.avatar} />
                              <p className={styles.name}>{member.name}</p>
                         </div>
                    </Link>
               );
          })
     );
}