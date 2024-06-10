import React, { useState } from 'react';
import { Card, Flex, Skeleton } from 'antd';
import Charts from '../chart/Charts';

const CardEnsheaab = ({ checkeds }) => {
  const [loading, setLoading] = useState(checkeds);
  const data1 = [5, 3, 2, 4, 6];
  const data2 = [8, 2];

  return (
    <>
      <Card style={{ marginTop: 16 }}>
        <Flex vertical gap="5rem">
          <Skeleton loading={loading} active paragraph={{ rows: 1 }} >
              <Flex justify='space-between' align="center">
                <p>1403/03/22</p>
                <p>انشعاب</p>
              </Flex>
              </Skeleton>
              <Flex justify='space-between' align="center" style={{ margin: '0 1rem' }}>
              <Skeleton loading={loading} active paragraph={{ rows: 1 }} >
                <Flex vertical align="center">
                  <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>بستانکاری</p>
                  <span style={{ color: '#bae637', fontWeight: 'bold' }}>هزارتومان88 </span>
                </Flex>
                <Flex style={{ color: '#d9d9d9' }}>|</Flex>
                <Flex vertical align="center">
                  <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>بدهکاری</p>
                  <span style={{ color: '#ff7875', fontWeight: 'bold' }}>هزارتومان88 </span>
                </Flex>
                </Skeleton>
              </Flex>
              
              <Skeleton loading={loading} active paragraph={{ rows: 1 }} >
              <Flex vertical align="end" gap="2rem">
                <p style={{ fontWeight: 'bold' }}>وضعیت کنتور</p>
                <Flex justify="center" align="center" gap="0.5rem" style={{ width: '100%' }}>
                  <div>
                    {data1.map(elem => <span key={elem} style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem', margin: '0 0.10rem' }}>{elem}</span>)}
                  </div>
                  <div>/</div>
                  <div>
                    {data2.map(elem => <span key={elem} style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem', margin: '0 0.10rem' }}>{elem}</span>)}
                  </div>
                  <span>m <span style={{ position: 'absolute', fontSize: '10px' }}>3</span></span>
                </Flex>
              </Flex>
              </Skeleton>
          
          <Flex justify='space-between' align="center" style={{ margin: '0 1rem' }}>
            <Skeleton loading={loading} active paragraph={{ rows: 1 , width: '100%' }}  >
            <>
            <Flex vertical align="center">
              <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>کنتور</p>
              <span style={{ color: '#ff7875', fontWeight: 'bold' }}>ناسالم</span>
            </Flex>
              
            <Flex style={{ color: '#d9d9d9' }}>|</Flex>
            <Flex vertical align="center">
              <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>انشعاب</p>
              <span style={{ color: '#ff7875', fontWeight: 'bold' }}>قطع</span>
            </Flex>
            </>
          </Skeleton>
          </Flex>
         
          <Flex vertical align="end" gap="2rem">
            <Skeleton loading={loading} active>
              <>
                <p style={{ fontWeight: 'bold' }}>تاریخچه قبض</p>
                <Charts />
              </>
            </Skeleton>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default CardEnsheaab;