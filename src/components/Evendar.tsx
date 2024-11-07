import * as S from './Evendar.style';
import { EventInput } from '@constants/interfaces';
import { EventModel } from '@models';
import { HeaderToolbar } from './HeaderToolbar';
import { MonthlyCalendar } from './Monthly';

const Evendar = () => {
  const toEventModel = (events: EventInput[]) => {
    return events.map(event => new EventModel(event));
  };

  return (
    <S.EvendarContainer>
      <HeaderToolbar />
      <MonthlyCalendar
        events={toEventModel([
          { title: '6-10', start: '2024-11-05T16:00:00Z', end: '2024-11-09T16:30:00Z', color: '#AECB00', allDay: true },
          { title: '6-8', start: '2024-11-05T15:00:00Z', end: '2024-11-07T15:30:00Z', color: '#FCBB00' },
          { title: '18', start: '2024-11-18T00:00:00Z', end: '2024-11-18T00:30:00Z' },
          { title: '17-19', start: '2024-11-17T00:00:00Z', end: '2024-11-19T00:30:00Z', allDay: true },
          { title: '8', start: '2024-11-08T00:00:00Z', end: '2024-11-08T00:30:00Z', color: '#FF5154' },
          { title: '5', start: '2024-11-05T01:00:00Z', end: '2024-11-05T01:30:00Z', color: '#FF5154', allDay: true },
          { title: '5', start: '2024-11-05T00:00:00Z', end: '2024-11-05T00:30:00Z', allDay: true },
          { title: '7', start: '2024-11-07T00:00:00Z', end: '2024-11-07T00:30:00Z', allDay: true, color: '#FF46B5' },
          { title: '7', start: '2024-11-07T00:00:00Z', end: '2024-11-07T00:30:00Z', allDay: true, color: '#FF46B5' },
          { title: '7', start: '2024-11-07T00:00:00Z', end: '2024-11-07T00:30:00Z', allDay: true, color: '#FF46B5' },
        ])}
      />
    </S.EvendarContainer>
  );
};

export default Evendar;
