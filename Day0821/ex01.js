function task1(resolve, reject) {
    console.log('Task1 시작');
    let num = 10;
    setTimeout(function() {
        num = 1004;
        resolve({ result: 'Task1 결과', num }); // 객체 형태로 전달
    }, 1000);
    console.log('Task1 끝', num);
}

function fullfilled(data) {
    console.log('fullfiled : ', data.result, data.num);
}

function rejected(err) {
    console.log('rejected : ', err);
}


new Promise(task1).then(fullfilled, rejected);

// 상황 설정:

// 당신이 온라인 쇼핑몰에서 물건을 주문했다고 가정해봅시다.
// 택배 회사는 당신의 주문을 처리하고, 물건을 배달합니다.
// 주문(비동기 작업) 처리:

// 주문을 하면, 택배 회사는 물건을 준비하고 배달을 시작합니다. 이 과정은 시간이 걸리므로, 당신은 기다리게 됩니다. 이게 바로 비동기 작업입니다. 일이 완료될 때까지 기다려야 하지만, 그 동안 다른 일을 할 수 있습니다.
// 택배(비동기 작업의 결과) 도착:

// 물건이 준비되고, 택배가 당신에게 도착합니다.
// 이때 택배 회사는 당신에게 하나의 상자를 전달합니다. 그 상자 안에는 당신이 주문한 물건이 들어 있습니다. 택배 회사는 상자 하나만 전달합니다. 여러 개의 상자가 아니라, 하나의 상자에 물건을 담아서 전달하는 것이죠.
// 택배 상자(해당 작업의 결과) 열기:

// 당신은 택배 상자를 열고, 그 안에 있는 물건을 확인합니다.
// 택배 상자를 열 때, 상자 안에 여러 개의 물건이 있더라도, 먼저 꺼내는 물건만 확인합니다. 나머지는 나중에 확인할 수도 있겠지만, 첫 번째로 꺼내는 물건이 가장 중요합니다.

