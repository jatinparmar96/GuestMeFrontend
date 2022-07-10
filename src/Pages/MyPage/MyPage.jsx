import SpeakerUpdateProfile from '../../Components/SpeakerUpdateProfile/SpeakerUpdateProfile';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';

const MyPage = (props) => {
  const id = JSON.parse(localStorage.getItem('speaker')).id;
  console.log(id);

  return (
    <>

      <SpeakerUpdateProfile />
      <MyPageMenu id={ id} />
    </>
  );
}

export default MyPage;