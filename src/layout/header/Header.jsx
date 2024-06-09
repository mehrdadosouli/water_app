import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '11',
        label: 'Option 1',
      },
      {
        key: '12',
        label: 'Option 2',
      },
      {
        key: '13',
        label: 'Option 3',
      },
      {
        key: '14',
        label: 'Option 4',
      },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      {
        key: '21',
        label: 'Option 1',
      },
      {
        key: '22',
        label: 'Option 2',
      },
      {
        key: '23',
        label: 'Submenu',
        children: [
          {
            key: '231',
            label: 'Option 1',
          },
          {
            key: '232',
            label: 'Option 2',
          },
          {
            key: '233',
            label: 'Option 3',
          },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          {
            key: '241',
            label: 'Option 1',
          },
          {
            key: '242',
            label: 'Option 2',
          },
          {
            key: '243',
            label: 'Option 3',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Navigation Three',
    children: [
      {
        key: '31',
        label: 'Option 1',
      },
      {
        key: '32',
        label: 'Option 2',
      },
      {
        key: '33',
        label: 'Option 3',
      },
      {
        key: '34',
        label: 'Option 4',
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
const Header = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const [show, setShow] = useState(false)
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Flex justify='space-between' align='center' style={{ marginTop: '2rem',minHeight:'fit-content'}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '3rem', userSelect: 'none' }} onClick={() => { setShow(!show) }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        {
          show && <Menu
            mode="inline"
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 256,
              position:'absolute',
              top:'6rem',
              zIndex:100
            }}
            items={items}
          />
        }

      <h1>
        سازمان آب
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'2rem',cursor:'pointer'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>

    </Flex>
  )
}

export default Header