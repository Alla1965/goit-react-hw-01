import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css"; 
import friends from "../Friends/friends.json"
console.log(styles);
console.log(friends);

export default function FriendList({ friends }) {
    return (
                <ul className={styles.friendList}>
                {friends.map(friend => (
                    <li key={friend.id} className={styles.friendItem}>
                        <FriendListItem friend={friend} />
                    </li>
                ))}
            </ul>
        
    );

}


   