import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import StatsItem from './StatsItem';

const Profile = ({ name, tag, location, image, stats }) => {
  const statsData = Object.entries(stats);

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {statsData.map(([label, value], index) => (
          <StatsItem key={index} label={label} value={value} />
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
