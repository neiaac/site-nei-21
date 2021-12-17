import { calendar, year, month, day } from './calendar.module.scss';

export default function Calendar({ calendarList }) {
  return (
    <div className={calendar}>
      <span className={year}>2020</span>
      <span className={month}>Setembro</span>
      <div className={day}>
        <span>Data</span>
        <span>Nome do evento</span>
      </div>
      <div className={day}>
        <span>Data</span>
        <span>Nome do evento</span>
      </div>
      <div className={day}>
        <span>Data</span>
        <span>Nome do evento</span>
      </div>
      <div className={day}>
        <span>Data</span>
        <span>Nome do evento</span>
      </div>
      <div className={day}>
        <span>Data</span>
        <span>Nome do evento</span>
      </div>
    </div>
  );
}
