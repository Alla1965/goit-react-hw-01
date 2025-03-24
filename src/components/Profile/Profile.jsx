

import userData from "../UsedData/UserData";
import styles from "./Profile.module.css"; // 
// console.log(styles);
console.log(userData);


export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <img className={styles.profileAvatar} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

            <ul className={styles.profileStats}>
                {stats &&
    Object.entries(stats).map(([key, value]) => (
      <li key={key}>
        <span className={styles.spanKey}>{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
        <span className={styles.spanValue}>{value}</span>
      </li>
    ))}
            </ul>
    </div>
  );
}


