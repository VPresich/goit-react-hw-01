import styles from './Profile.module.css';

const StatsItem = ({ label, value }) => {
  return (
    <li>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </li>
  );
};

export default StatsItem;
