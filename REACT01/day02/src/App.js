import Hello from "./Hello";

const App = ()=> {
    return(<>
        <h3>Welcome to my homepage</h3>
        <Hello />
    </>);
};

//위를 모듈로 등록해야한다.
// -> export를 사용하면 모든 컴포넌트 파일에서 import 가능해진다.
export default App;