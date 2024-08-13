import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
    // <> ... </>는 리액트의 Fragment 문법으로, 여러 요소를 하나의 부모 요소로 그룹화하여 렌더링할 수 있게 해줍니다. 이렇게 하면 두 개의 컴포넌트를 동시에 화면에 표시할 수 있습니다.
    <>
    <Hello />
    <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
    </>
);
const myElement = (
    <div>
      <h1>I Love JSX!</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
          </tr>
          <tr>
            <td>Elsa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
  
// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );
  
 // render은 각각 2개를 선언하면 제일 마지막render가 다 덮어쓴다. -> 마지막 render값만 출력. 
//   root.render(myelement);
//   root.render(<Hello />);
