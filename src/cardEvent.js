const cardEvents = [
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION',
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877fr',
        type: 'RESERVATION',
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728889',
        type: 'CONFIRMATION',
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION',
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION',
    },
    {
        amount: 22222,
        cardId: 'Nikesh',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION',
    },
    {
        amount: 22222,
        cardId: 'devashish',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'RESERVATION',
    },
    {
        amount: 22222,
        cardId: 'devashish',
        id: '98d4608c-862a-4b46-9839-2faa30a65d35',
        type: 'CANCELLATION',
    }
]
function transaction(arr) {
    let trans = {};
    for (let i = 0; i < arr.length; i++) {
        let name = cardEvents[i].cardId;
        if (trans[name] == undefined) {
            if (cardEvents[i].type == 'RESERVATION') {
                trans[name] = [cardEvents[i]]
            }
        }
        else {
            if (cardEvents[i].type == 'RESERVATION') {
                trans[name][0] = cardEvents[i]
            }
            else if (cardEvents[i].type == 'CANCELLATION' || cardEvents[i].type == 'CONFIRMATION') {
                trans[name][1] = cardEvents[i]
            }
        }
    }
    let card = {};
    for (let key in trans) {
        if (trans[key].length == 2) {
            card[key] = trans[key]
        }
    }
    return card;
}
console.log(transaction(cardEvents))