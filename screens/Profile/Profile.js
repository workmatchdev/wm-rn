import BussinesProfile from './BussinesProfile';
import UserProfile from './UserProfile';
import useSession from '../../hooks/sessions/useSession';

const Profile = () => {
    const { user } = useSession();
    return (
        <>
            {user.userType === "applicant" ? (
                <UserProfile />
            ) : (
                <BussinesProfile />
            )}
        </>
    );
}

export default Profile;