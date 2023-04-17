import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const data = props.stats;
  return (
    <section className={css.section}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}

      <ul className={css.statList}>
        {data.map(item => (
          <li key={item.id} className={css.item}>
            <span className="label">{item.label}</span>
            <span className="percentage"> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
