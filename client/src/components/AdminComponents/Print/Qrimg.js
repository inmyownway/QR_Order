import React from 'react';
import styled from 'styled-components';
const Qrimg = ({ data }) => {
   return (
      <Img>
         <div>
            <img src={data.qrURL} alt=""></img>
         </div>
         <div>{`테이블 번호 : ${data.tableNum}`}</div>
      </Img>
   );
};
const Img = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
   border: 1px solid black;

   img {
      box-sizing: border-box;
      padding: 5px;
      width: 100%;
   }
`;
export default Qrimg;
