import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { openMemberInfo } from '../../../redux/actions';
import styles from '../../../styles/NavItem.module.scss';
import 'antd/es/tooltip/style/index.css';
import 'antd/es/button/style/index.css';

function NavItem({color, icon, tooltip, link, openMemberInfo}) {
  const handleOpenMemberInfo = (id) => {
    if(link == '/members') openMemberInfo(id);
  };
  
  return (
    <Link href={link}>
      <Tooltip className="tooltip" placement="right" title={tooltip}>
        <button className={styles.single} style={{backgroundColor:`${color}`}} onClick={() => handleOpenMemberInfo("1")}>
          <span className="material-icons">
            {icon}
          </span>
        </button>
      </Tooltip>
    </Link>
  )
};

export default connect(null, { openMemberInfo })(NavItem);