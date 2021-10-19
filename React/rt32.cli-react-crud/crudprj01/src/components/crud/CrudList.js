
import React from 'react';
import CrudListItem from './CrudListItem';

function CrudList(props) {

  // JSX로 화면 만들기
  const {items, callbackDel, callbackUp, callbackDown, callbackSave} = props;
  const arrs = items.map( (item)=>{
      return (
          <CrudListItem
              {...props}
              item={item}
              key={item.id}
              callbackDel={callbackDel}
              callbackUp={callbackUp}
              callbackDown={callbackDown}
              callbackSave={callbackSave}
          >
          </CrudListItem>
      )
  });

  return (
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>POWER</th>
                  <th>CRUD</th>
              </tr>
          </thead>
          <tbody>
              {arrs}
          </tbody>
      </table>
  )
}


CrudList.propTypes = {
    // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    // 인자명: PropTypes.func.isRequired,
};
CrudList.defaultProps = {
    // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    // 인자명: () => {},
};

export default CrudList;