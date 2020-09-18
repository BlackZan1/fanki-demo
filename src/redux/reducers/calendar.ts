const initialState = {
    data: [
        { month: 'Сентябрь', type: 'birthday', day: '30', dayName: 'Сегодня', employees: ['Александров Александр', 'Фёдоров Георгий'] },
        { month: 'Ноябрь', type: 'birthday', day: '1', dayName: 'Завтра', employees: ['Александров Александр', 'Фёдоров Георгий'] },
        { month: 'Ноябрь', type: 'event', day: '1', period: '10:00 - 11:00', description: 'Презентация мобильной системы', about: 'Групповое событие' }
    ]
}

const CalendarReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default CalendarReducer;