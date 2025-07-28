import { useSelector } from 'react-redux';
import { userSelector } from '../../app/UserSlice';

const Profile = () => {
    const { user } = useSelector(userSelector);
    console.log(user);
    return <div>Profile of {user.username}</div>;
};

export default Profile;
