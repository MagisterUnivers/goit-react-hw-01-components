import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = props => {
  const data = props.friends;
  return (
    <ul className={css.friendList}>
      {data.map(friend => (
        <li key={friend.id} className="item">
          <span
            className={`${css.isOnline} ${
              friend.isOnline ? css.Online : css.Offline
            }`}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
