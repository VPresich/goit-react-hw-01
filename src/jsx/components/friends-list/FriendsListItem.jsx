import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Avatar"
        width="100"
        height="100"
      />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
