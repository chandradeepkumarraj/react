function UserProfile() {
  function getUserInfo(name, age) {
    return `${name} is ${age} years old.`;
  }

  return (
    <div>
      <p>{getUserInfo("Akash", 25)}</p>
    </div>
  );
}

export default UserProfile;
