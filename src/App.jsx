import Profile from "./components/Profile/Profile.jsx";
import userData from "./components/UsedData/UserData.jsx";
import friends from "./components/Friends/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./components/transactions/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";



console.log(friends);

import PropTypes from 'prop-types';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  );
}