import React, { useState, useEffect, useRef, useCallback } from 'react';

import CrudInput from '../components/crud/CrudInput';
import CrudList from '../components/crud/CrudList';

function CrudContainer(props) {

  // 컴포넌트의 상태값 설정
  const [items, setItems] = useState( [
      {id:1, name: "슈퍼맨", power: 100},
      {id:2, name: "아쿠아맨", power: 300},
      {id:3, name: "스파이더맨", power: 500},
      {id:4, name: "배트맨", power: 30},
  ]); // 상태값이 참조타입 경우

  // ref 만들기. 예시) const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect( () => {
      if (refIsMounted.current){
          // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
          console.log('componentDidUpdate');
      }
      else {
          // 마운트 완료 후에 실행됨. 한번만. focus 줄때
          console.log('componentDidMount');
          refIsMounted.current = true;
      }
  });

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callbackAdd = useCallback( (param)=>{
      // state 변경
      // items에서 최대 id 값을 구하는 방법.
      // 방법1. todoItems.map()과 todoItems.reduce()를 사용하여 max id를 찾는 방법
      let maxid = 0;
      if( items.length>0){
          maxid = items.map( item=>item.id )
                       .reduce( (prev,curt)=> prev>= curt ? prev: curt );
      }
      else {
          maxid = 0;
      }
      const newid = maxid + 1;

      // param 에  id값 추가
      param.id = newid ;

      /// items.push(param);
      setItems( [...items, param] );
  }, [/* 메서드와 연관되는 상태(변수)명들을 기술 */ items ]);
  const callbackDel = useCallback( (param)=>{
      const newItems = items.filter( (item)=>{
          return item.id !== param.id;
      });
      setItems(newItems); // state 변경
  }, [/* 메서드와 연관되는 상태(변수)명들을 기술 */ items ]);
  const callbackUp = useCallback( (param)=>{
      const newItems = items.filter( (item)=>{
          if( item.id === param.id ){
              item.power += 100;
          }
          return item;
      });
      setItems(newItems); // state 변경
  }, [/* 메서드와 연관되는 상태(변수)명들을 기술 */ items ]);
  const callbackDown = useCallback( (param)=>{
      const newItems = items.filter( (item)=>{
          if( item.id === param.id ){
              item.power -= 50;
          }
          return item;
      });
      setItems(newItems); // state 변경
  }, [/* 메서드와 연관되는 상태(변수)명들을 기술 */ items ]);
  const callbackSave = useCallback( (param)=>{
      debugger;
      const newItems = items.filter( (item)=>{
          if( item.id === param.id ){
              item.name = param.name;
              item.power = param.power;
          }
          return item;
      });
      setItems(newItems); // state 변경
  }, [/* 메서드와 연관되는 상태(변수)명들을 기술 */ items ]);

  // JSX로 화면 만들기
  return (
      <div>
          <h1>Creat Read Update Delete</h1>
          <CrudInput callbackAdd={callbackAdd}></CrudInput>
          <hr/>
          <CrudList
              items={items}
              callbackDel={callbackDel}
              callbackUp={callbackUp}
              callbackDown={callbackDown}
              callbackSave={callbackSave}
          >
          </CrudList>
      </div>
  )
}


CrudContainer.propTypes = {
    // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    // 인자명: PropTypes.func.isRequired,
};
CrudContainer.defaultProps = {
    // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    // 인자명: () => {},
};

export default CrudContainer;