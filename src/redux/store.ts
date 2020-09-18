import { createStore, combineReducers, Store } from 'redux';

import EmployeesReducer from './reducers/employees';
import NotificationsReducer from './reducers/notifications';
import RequestsReducer from './reducers/requests';
import CalendarReducer from './reducers/calendar';
import BaseReducer from './reducers/base';
import EventsReducer from './reducers/events';

const reducers = combineReducers({
    employees: EmployeesReducer,
    notifications: NotificationsReducer,
    requests: RequestsReducer,
    calendar: CalendarReducer,
    base: BaseReducer,
    events: EventsReducer
})

const store: Store = createStore(reducers);

export default store;