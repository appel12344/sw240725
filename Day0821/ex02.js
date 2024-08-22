// 택배 회사 역할: Promise는 비동기 작업을 처리합니다.
function task1(fullfill, reject) {
    console.log('Task1 시작'); // 택배 준비 시작 (비동기 작업 시작)
    
    let num = 0; // 택배 상자를 준비합니다. 현재는 빈 상자입니다.
    
    setTimeout(function() {
        num = 1004; // 300ms 후에 상자에 물건(1004)을 넣습니다.
        fullfill('Task1 결과', num); // 택배회사는 'Task1 결과'라는 물건을 상자에 담아 배달합니다.
    }, 300); // 0.3초 후 택배를 보냅니다.
    
    console.log('Task1 끝', num); // 택배가 아직 배송되지 않은 상태에서 상자는 여전히 비어 있습니다 (num은 0).
}

// 택배를 받는 사람 역할: then 메서드를 통해 결과를 받는 사람입니다.
function fullfilled(result, num) {
    // 택배 상자를 열고, 첫 번째 물건(result)만 확인합니다.
    console.log('fullfiled : ', result, num); // 첫 번째 물건인 'Task1 결과'만 출력됩니다. 두 번째 물건(num)은 확인하지 않음 (undefined로 처리됨)
}

// 택배가 도착하지 않거나 문제가 생긴 경우: 택배가 실패했을 때 처리하는 역할입니다.
function rejected(err) {
    // 택배가 실패한 경우 (작업이 실패한 경우)
    console.log('rejected : ', err); // 오류 메시지를 출력
}

// Promise를 생성하고, 택배 준비를 시작합니다.
new Promise(task1)
    .then(fullfilled, rejected); // 택배가 성공적으로 도착하면 fullfilled 함수가 호출됩니다. 실패하면 rejected 함수가 호출됩니다.
