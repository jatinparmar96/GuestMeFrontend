const SpeakerAccount = () => {
  return (
    <>
      <h3>Account</h3>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <span>Change password</span>
        <label>
          Location
          <input type="text" />
        </label>
        <label>
          Phone
          <input type="text" />
        </label>
        <button type="submit">Save</button>
        <button type="submit">Delete account</button>
      </form>
    </>
  );
}

export default SpeakerAccount;