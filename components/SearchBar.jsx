import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Input, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import searchMembers from '../helpers/searchMembers';
import styles from '../styles/SearchBar.module.scss';
import 'antd/es/input/style/index.css';
import 'antd/es/avatar/style/index.css';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const [members, setMembers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value === inputRef.current.state.value) {
        search(value);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputRef, value]);

  const search = async (data) => {
    const filteredMembers = await searchMembers(data);
    console.log(filteredMembers);
    setMembers(filteredMembers);
  };

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const disableDropdown = () => {
    setTimeout(() => { setIsSearching(false); }, 500);
  };

  const enableDropdown = () => {
    setIsSearching(true);
  };

  return (
    <div className={styles.single}>
      <Input
        className={styles.input}
        ref={inputRef}
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
        onFocus={enableDropdown}
        onBlur={disableDropdown}
        onChange={(e) => onChange(e)}
      />
      <div className={isSearching ? styles.dropdown : styles.dropdown_invisible}>
        {members.map((member) => (
          <Link href={`/members/${member.id}`} key={member.id}>
            <a className={styles.dropdown_item}>
              <Avatar className={styles.avatar} src={member.avatar} />
              <p className={styles.name}>{member.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
