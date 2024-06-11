import React, { memo, useState } from 'react';
import { Card, Flex, Skeleton } from 'antd';
import Charts from '../chart/Charts';
import Skelety from '../skelety/Skelety';

const CardEnsheaab = ({checkeds}) => {
  const [loading, setLoading] = useState(checkeds);
  const data1 = [5, 3, 2, 4, 6];
  const data2 = [8, 2];



  return (
    <>
      <Card style={{ margin: 5 }}>
        <Flex vertical style={{gap:`${!loading ? "4rem" : "2rem"}`}}>
          <Flex justify='space-between' align="center">
            {loading ? <Skelety width={'50%'} height={'50%'} x={'0%'}  ></Skelety>:
              <p>1403/03/22</p>
            }
            
            { loading ? <Skelety width={'50%'} height={'50%'} x={'50%'} ></Skelety> :
                <p>انشعاب</p>
             }
          </Flex>
          <Flex justify='space-between' align="center" style={{ margin: '0 1rem' }}>

            <Flex vertical align="center">
              <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>بستانکاری</p>
              { loading ?  <Skelety width={'100%'} height={'100%'} x={0} ></Skelety>:
                <span style={{ color: '#bae637', fontWeight: 'bold',textShadow:'0px 1px #bae637' }}>هزارتومان88 </span>
            }
            </Flex>
            <Flex style={{ color: '#d9d9d9' }}>|</Flex>
            <Flex vertical align="center">
              <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>بدهکاری</p>
              { loading ? <Skelety width={'100%'} height={'100%'} x={0} ></Skelety>:
                <span style={{ color: '#ff7875', fontWeight: 'bold',textShadow:'0px 1px #ff7875' }}>هزارتومان88 </span>
              }
            </Flex>
          </Flex>


          { loading ? <Skelety width={'100%'} height={'100%'} x={0} ></Skelety> :
          <>
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


            <Flex justify='space-between' align="center" style={{ margin: '0 1rem' }}>
              <>
                <Flex vertical align="center">
                  <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>کنتور</p>
                  <span style={{ color: '#ff7875', fontWeight: 'bold',textShadow:'0px 1px #ff7875' }}>ناسالم</span>
                </Flex>

                <Flex style={{ color: '#d9d9d9' }}>|</Flex>
                <Flex vertical align="center">
                  <p style={{ fontSize: '1.2rem', color: '#8c8c8c' }}>انشعاب</p>
                  <span style={{ color: '#ff7875', fontWeight: 'bold',textShadow:'0px 1px #ff7875' }}>قطع</span>
                </Flex>
              </>

            </Flex>
            </>
          }
          <Flex vertical align="end" gap="2rem">
            <>
              <p style={{ fontWeight: 'bold' }}>تاریخچه قبض</p>
              { loading ? <Skelety width={'100%'} height={'100%'} x={0} h={250} ></Skelety>:
                <Charts />
              }
            </>
          </Flex>
          <Flex justify='space-between' align="center">
              { loading ? <Skelety width={'40%'} height={'20%'} x={0} ></Skelety>:<p>1403/03/22</p> }
                <span style={{textAlign:'right',minWidth:"6rem"}}>از تاریخ</span>
              </Flex>
              <Flex justify='space-between' align="center">
              { loading ? <Skelety width={'40%'} height={'20%'} x={0}  ></Skelety>:<p>1403/04/22</p> }
                <span style={{textAlign:'right',minWidth:"6rem"}}>تا تاریخ</span>
              </Flex>
              <Flex justify='space-between' align="center">
              { loading ? <Skelety width={'40%'} height={'20%'} x={0}  ></Skelety>: <p>250000</p> }
                <span style={{textAlign:'right',minWidth:"6rem"}}>مصرف کل</span>
              </Flex>
              <Flex justify='space-between' align="center">
              { loading ? <Skelety width={'40%'} height={'20%'} x={0}  ></Skelety>:<p>500000</p> }
                <span style={{textAlign:'right',minWidth:"6rem"}}>مبلغ کل</span>
              </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default memo(CardEnsheaab);