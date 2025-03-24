import styles from "./FriendListItem.module.css" 
export default function FriendListItem({ friend }) {
    return (
        <div>
            <img className={styles.ListItemAvatar}  src={friend.avatar} alt={friend.name} width="130" />
            <p className={styles.ListItemName}>{friend.name}</p>
             <p className={friend.isOnline ? styles.ListItemIsOnlineGreen : styles.ListItemIsOnlineRed}>
        {friend.isOnline  ? "Online" : "Offline"}
      </p>
        </div>
    );
}


