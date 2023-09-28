import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <>
      <div className="profilecard">
        <div className="profileinfos">
          <div className="profileimage"></div>
          <div className="profileinfo">
            <div>
              <p className="profilename">John Doe</p>
              <p className="profilefunction">Front-end dev</p>
            </div>
            <div className="profilestats">
              <p className="profileflex profileflex-col">
                Articles
                <span className="profilestate-value">34</span>
              </p>
              <p className="profileflex">
                Followers
                <span className="profilestate-value">455</span>
              </p>
            </div>
          </div>
        </div>
        <button className="profilerequest" type="button">
          Add friend
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
