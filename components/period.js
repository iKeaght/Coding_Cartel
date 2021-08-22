const dayjs = require('dayjs');

function formatDate(dateString) {
  return dayjs(dateString).format('DD/MM/YYYY');
}

export default function Period(props) {
  const { start, end } = props.period || {};
  let period = 'Pas de date.';
  if (start && end) {
    if (start === end) {
      period = `Le ${formatDate(start)}`;
    } else {
      period = `Du ${formatDate(start)} au ${formatDate(end)}`;
    }
  }
  if (start && !end) {
    period = `À partir du ${formatDate(start)}`;
  }
  if (!start && end) {
    period = `Jusqu'au ${formatDate(end)}`;
  }

  return (
    <div className={props.className}>
      { period }
    </div>
  );
}
