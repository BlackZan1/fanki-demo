const initialState = {
    data: [
        { solution: '2 несогласованных запроса', type: 'unreceived', employees: ['Шишкин Егор', 'Петров Алексей'] },
        { solution: 'Согласован', type: 'received', period: '20 августа, 09:00 - 21 августа 18:00' },
        { solution: 'Согласован', type: 'received', period: '20 августа, 09:00 - 21 августа 18:00' }
    ]
}

const RequestsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default RequestsReducer;