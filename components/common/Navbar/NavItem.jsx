import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { openMemberInfo } from '../../../redux/actions';
import styles from '../../../styles/NavItem.module.scss';
import 'antd/es/tooltip/style/index.css';
import 'antd/es/button/style/index.css';

function NavItem({color, icon, tooltip, link, isExternalLink, openMemberInfo}) {
  const router = useRouter();
  
  const handleOpenMemberInfo = (id) => {
    if(link == '/members') openMemberInfo(id);
  };
  
  return (
    <Link href={link} target={isExternalLink? "_blank" : "_self"} rel="noreferrer">
      <a href={link} target={isExternalLink? "_blank" : "_self"} rel="noreferrer">
        <Tooltip className="tooltip" placement="right" title={tooltip}>
          <button className={`${styles.single} ${router.pathname === link ? 'disabled-link' : 'link'}`} style={{backgroundColor:`${color}`}} onClick={() => handleOpenMemberInfo("1")}>
            <span className="material-icons">
              {icon}
            </span>
          </button>
        </Tooltip>
      </a>
    </Link>
  )
};

export default connect(null, { openMemberInfo })(NavItem);