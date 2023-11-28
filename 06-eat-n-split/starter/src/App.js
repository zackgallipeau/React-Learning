import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  function handleFormOpen() {
    setFormOpen((open) => !open);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        {formOpen && <FormAddFriend />}

        <Button click={handleFormOpen}>
          {formOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitbill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${friend.balance}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, click }) {
  return (
    <button onClick={click} className="button">
      {children}
    </button>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👨‍🤝‍👨 Friend name</label>
      <input type="text" />
      <label>🖼 Image URL</label>
      <input type="text" />
      <Button />
    </form>
  );
}

function FormSplitbill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with FRIEND</h2>

      <label>💲 Bill Value</label>
      <input type="text" />

      <label>🕴 Your expense</label>
      <input type="text" />

      <label>👨‍🤝‍👨 Friend's Expense</label>
      <input type="text" />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="You">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split</Button>
    </form>
  );
}
